import { Router } from 'express'
/**
 * Vui lòng export Validator và Controller ở bên dưới
 */
import { accessTokenValidator } from '~/middlewares/auth.middlewares'
import { DriverValidator } from '~/middlewares/drivers.middlewares'
import { getAllDriverController, createDriverController, getDriverController, updateDriverController } from '~/controllers/driver.controllers'

// Khai báo router cho driver
const driverRouter = Router()

//==========================VIẾT API Ở ĐÂY==========================

/**
 * Description: Get all drivers from database
 * Path: /drivers/
 * Method: GET
 * Header: { Authorization: Bearer <access_token> }
 */
driverRouter.get('/', getAllDriverController)
driverRouter.get('/:id', getDriverController)


/**
 * Description: Get all drivers from database
 * Path: /drivers/
 * Method: POST
 * Header: { Authorization: Bearer <access_token> }
 * Body: { DriverReqBody } hoặc cụ thể hơn
 * {
 *     fullname: string,
 *     email: string,
 *     identification: string,
 *     ...,
 *     ...
 * }
 */
driverRouter.post('/', DriverValidator, createDriverController)

driverRouter.patch('/:id', updateDriverController)

export default driverRouter
