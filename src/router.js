import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use (VueRouter)

function importComponent(path) {
    return () => import (`./components/${path}.vue`)
}

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path : "/",
            name : "admin",
            component : importComponent('DashboardLayout'),
            children : [
                // Dashboard
                {
                    path : "/hitung",
                    name : "Hitung Angka",
                    component : importComponent('HitungAngka'),
                },
                {
                    path : "/validasi",
                    name : "Unguided",
                    component : importComponent('ValidasiEmail'),
                },
                //tugas
                {
                    path:"/Palidorm",
                    name:"Palidorm",
                    component : importComponent('palindorm'),
                },
                {
                    path:"/reverse",
                    name:"Reverse Huruf",
                    component : importComponent('reserveKalimat'),
                },
                {
                    path:"/konversi",
                    name:"Konversi Waktu",
                    component : importComponent('KonversiWaktu'),
                }
            ]
        },
    ]
});

export default router;