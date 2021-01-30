<template>
  <div ref="pinModal" class="p-3" style="width: 500px;">
    <div class="field mb-4">
      <div class="heading">
        <label class="required">Title</label>
      </div>
      <div class="input ltr">
        <input
          type="text"
          class="text fullwidth"
          name="title"
          autofocus=""
          @input="input($event)"
          v-model="pin.title"
          autocomplete="off"
        />
      </div>
    </div>
    <div class="field mb-4">
      <div class="heading">
        <label class="required">Description</label>
      </div>
      <div class="input ltr">
        <textarea
          class="donkeytail-redactor block opacity-0"
          style="min-height: 110px;"
          name="description"
          v-model="description"
          autofocus=""
          autocomplete="off"
        >
        </textarea>
      </div>
    </div>
    <button
      v-if="parent == 'pin'"
      class="btn block ml-auto"
      @click.prevent="deletePin()"
    >
      Delete Pin
    </button>
    <button
      v-if="parent == 'canvas'"
      class="btn submit block ml-auto"
      :disabled="canAdd ? false : 'disabled'"
      :class="canAdd ? '' : 'opacity-50'"
      @click.prevent="addPin()"
    >
      Add
    </button>
  </div>
</template>

<script>
import tippy from 'tippy.js'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/light-border.css'

export default {
  props: ['parent', 'label', 'description'],
  data() {
    return {
      pin: {
        title: '',
        description: '',
      },
      tippy: null,
      canAdd: false,
    }
  },
  methods: {
    addPin() {
      this.$emit('added', {
        label: this.pin.title,
        description: this.pin.description,
      })
      this.tippy.hide()
    },
    deletePin() {
      this.$emit('deleted')
      this.tippy.hide()
    },
    input(event) {
      if (this.parent == 'pin') {
        this.$emit('updated', {
          label: this.pin.title,
          description: this.pin.description,
        })
      } else {
        if (this.pin.title && this.pin.title.length > 0) {
          this.canAdd = true
        }
      }
    },
  },
  mounted() {
    const self = this
    const parentRef = this.parent == 'pin' ? 'pin' : 'addBtn'
    this.tippy = tippy(self.$parent.$refs[parentRef], {
      content: self.$refs.pinModal,
      trigger: 'click',
      theme: 'light-border',
      allowHTML: true,
      hideOnClick: 'toggle',
      interactive: true,
      maxWidth: 600,
      zIndex: 1000,
      onClickOutside(instance, event) {
        console.log(event)
        instance.hide()
      },
      onShown() {
        $('.donkeytail-redactor').redactor({
          buttons: [
            'html',
            'bold',
            'italic',
            'lists',
            'link',
            'image',
            'horizontalrule',
          ],
          plugins: ['alignment', 'source'],
          callbacks: {
            synced: function(html) {
              self.pin.description = html
              self.input()
            },
          },
        })
      },
    })
    this.pin.title = this.label
  },
}
</script>
