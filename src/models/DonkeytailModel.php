<?php

/**
 * Donkeytail plugin for Craft CMS 3.x
 *
 * Fieldtype that allows you to quickly and easily content manage points on images. You can use it for locations on a faux map, showcasing multiple products within an image, or even pinning the tail on a donkey.
 *
 * @link      https://simplygoodwork.com
 * @copyright Copyright (c) 2020 Good Work
 */

namespace simplygoodwork\donkeytail\models;

use simplygoodwork\donkeytail\Donkeytail;

use Craft;
use craft\base\Model;
use craft\services\Elements;
use craft\elements\Entry;
use simplygoodwork\donkeytail\models\PinModel;
use simplygoodwork\donkeytail\fields\Donkeytail as DonkeytailField;

/**
 * DonkeytailModel Model
 *
 * Models are containers for data. Just about every time information is passed
 * between services, controllers, and templates in Craft, it’s passed via a model.
 *
 * https://craftcms.com/docs/plugins/models
 *
 * @author    Good Work
 * @package   Donkeytail
 * @since     1.0.0
 */
class DonkeytailModel extends Model
{
    // Public Properties
    // =========================================================================

    /**
     * Some model attribute
     *
     * @var array
     */
    public $canvasId = "";

    /**
     * Some model attribute
     *
     * @var array
     */
    public $pinIds = [];

    /**
     * Some model attribute
     *
     * @var array
     */
    public $meta = [];

    // Public Methods
    // =========================================================================

    /**
     * Returns the validation rules for attributes.
     *
     * Validation rules are used by [[validate()]] to check if attribute values are valid.
     * Child classes may override this method to declare different validation rules.
     *
     * More info: http://www.yiiframework.com/doc-2.0/guide-input-validation.html
     *
     * @return array
     */
    public function rules()
    {
        return [
            ['canvasId', 'array'],
            ['pinIds', 'array'],
            ['meta', 'array'],
        ];
    }

    /**
     * Get the canvas asset
     *
     * @return null|object
     */
    public function getCanvas()
    {
        $result = null;

        if (isset($this->canvasId) && $this->canvasId) {
            $result = Craft::$app->getAssets()->getAssetById($this->canvasId[0]);
        }

        return $result;
    }

    /**
     * Get the URL to the canvas asset 
     *
     * @param null $transform
     *
     * @return null|string
     */
    public function getCanvasUrl($transform = null)
    {
        $result = '';

        if ($canvas = $this->getCanvas()) {
            $result = $canvas->getUrl($transform);
        }

        return $result;
    }

    public function getPinsElementType() {
        if (!$this->pinIds) return null;

        return (new Elements)->getElementTypeById($this->pinIds[0]);
    }

    public function getPins()
    {   
        $pins = [];

        $firstKey = array_key_first($this->meta);
        $wysiwyg = array_key_exists('description', $this->meta[$firstKey]);

        if ($wysiwyg == true) {
            foreach ($this->meta as $key => $item) {
                $pin = new PinModel();
                $pinMeta = $this->meta[$key];
                $pin->title = $pinMeta['label'];
                $pin->description = $pinMeta['description'];
                $pin->x = $pinMeta['x'];
                $pin->y = $pinMeta['y'];
                array_push($pins, $pin);
            }
        } else {
            $elementTypeClass = $this->getPinsElementType();
        
            if (!$elementTypeClass) return $pins;
    
            $query = $elementTypeClass::find();
            $criteria = [
                'id' => $this->pinIds
            ];
            Craft::configure($query, $criteria);
            $queryAll = $query->all();

            foreach ($queryAll as $key => $element) {
                $pinMeta = $this->meta[$element->id];
                $pin = new PinModel();
                $pin->element = $element;
                $pin->x = $pinMeta['x'];
                $pin->y = $pinMeta['y'];
                array_push($pins, $pin);
            }
        }

        return $pins;
    }
}
