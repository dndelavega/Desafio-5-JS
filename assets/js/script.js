const totalTarea = document.getElementById("totalTarea");
const btnAgregar = document.getElementById("btnAgregar");
const templateBody = document.getElementById("templateDatos");
const totalRealizadas = document.getElementById('realizada')

const tareas=[
    {id:1, descripcion:"Hacer compras en Líder",isDone:false},
    {id:2, descripcion:"Terminar informes mensuales de Desladora MEL",isDone:true},
    {id:3, descripcion:"Sacar a pasear a Khali",isDone:false},
    {id:4, descripcion:"Hacer el desafío 5 JavaScript para web", isDone:true},
];

const cargaTareas = (iteradores) => {
    let añadidura =[];
    for (let iterador of iteradores) {
        const html = `
        <tr>
            <td>${iterador.id}</td>
            <td>${iterador.descripcion}</td>
            <td><input type="checkbox" ${iterador.isDone ? 'checked' : ''} onchange=realizadas(${iterador.id})></td>
            <td><i onclick=eliminar(${iterador.id}) class="fa-regular fa-circle-xmark"></i></td>
        </tr>
        `;
        añadidura.push(html);     
    }

    templateBody.innerHTML = añadidura.join("");
    totalTarea.innerHTML = añadidura.length;
}
cargaTareas(tareas);

btnAgregar.addEventListener('click',()=>{
    const inputTarea = document.getElementById("inputTarea").value;
    if (inputTarea === "") {
        alert("Ingrese una tarea");
    }
    else{
        tareas.push({id:(Date.now() % 1000), descripcion:inputTarea, isDone:false});
        cargaTareas(tareas);
    };

})

const realizadas = (id) => {
    const tareaIndex = tareas.findIndex((tarea) => tarea.id === id);
    tareas[tareaIndex] = {...tareas[tareaIndex], isDone: !tareas[tareaIndex].isDone};
    const contador = tareas.filter((tarea) => tarea.isDone).length;
    totalRealizadas.innerHTML = contador;
};

const eliminar = (id) =>{
    const indice = tareas.findIndex((tarea) => tarea.id === id);
    tareas.splice(indice, 1);
    cargaTareas(tareas);
    const contador = tareas.filter((tarea) => tarea.isDone).length;
    totalRealizadas.innerHTML = contador;
};