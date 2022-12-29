import { Context } from '@nuxt/types'
import { isUrlValid } from '../services/validateRoute'

export default async function (context: Context) {
  if (!(await isUrlValid(context.route.path))) {
    context.error({
      statusCode: 404,
      message: `Invalid route: ${context.route.path}`,
    })
  }
}
