export default new class storage{

    set(name, value){

        let Days    = 1
        let exp     = new Date()
        let expires = exp.getTime() + Days * 24 * 60 * 60 * 1000
        let data    = {
            value,
            expires 
        }
        localStorage.setItem(name, JSON.stringify(data))
    }

    get(name){

        let data        = localStorage.getItem(name)
        let _data       = JSON.parse(data)
        if(!_data) return null
        let storeData   = _data['value']

        let timestamp = new Date().getTime()
        if(timestamp > _data['expires']){
            
            localStorage.removeItem(name)
        }
        
        return storeData
    }

    del(name){
        
        return localStorage.removeItem(name)
    }
}