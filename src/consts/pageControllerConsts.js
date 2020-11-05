export const PAGES = {
  catalog: async () => {
    let { default: component } = await import(
      /* webpackChunkName: "catalog" */ '../pages/gl_catalog_page.vue'
    )
    return component
  },
  delivery: async () => {
    let { default: component } = await import(
      /* webpackChunkName: "delivery" */ '../pages/gl_delivery_page.vue'
    )
    return component
  },
  payment: async () => {
    let { default: component } = await import(
      /* webpackChunkName: "payment" */ '../pages/gl_payment_page.vue'
    )
    return component
  },
}

export default {
  PAGES,
}
