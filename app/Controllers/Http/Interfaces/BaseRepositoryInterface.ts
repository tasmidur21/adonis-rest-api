export default interface BaseRepositoryInterface {
    getAll(params:{}): Promise<any>
  
    getById(params:{}): Promise<any>
  
    delete(payload:{}): Promise<any>
  
    create(payload:{}): Promise<boolean>
  
    update(payload:{}): Promise<any>
  }