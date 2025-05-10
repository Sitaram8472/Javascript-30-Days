/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    function dfs(obj){
        if(!obj) return false;
        if(typeof obj !== 'object') return obj;

        if(Array.isArray(obj)){
            const newarr = [];
            for(let i=0; i<obj.length; i++){
                const curr = obj[i];
                const sub = dfs(curr);

                if(sub){
                    newarr.push(sub);
                }
            }
            return newarr;
        }

        const newobj = {};
        for(const key in obj){
            const sub = dfs(obj[key])
            if(sub){
                newobj[key] = sub;
            }
        }
        return newobj;
    }
    return dfs(obj);
    
};