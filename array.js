var name =["rahim","karim","halim","palim","rahim","hiron","samad","halim"]
var UniqueName =[];
for ( i=0;i<name.length;i++){
    var element = name[i];
    var index = UniqueName.indexOf(element);
    if(index==-1){
        UniqueName.push(element)
    }
}
console.log(UniqueName)