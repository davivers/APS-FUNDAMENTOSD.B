const { ipcRenderer } = require('electron')
const ipc = ipcRenderer


//close
closeBtn.addEventListener('click', () =>{
    ipc.send('closeApp')
})

minBtn.addEventListener('click', ()=>{
    ipc.send('minApp')
})

checkBtn.addEventListener('click', () => {
    ipc.send('submit')
})
