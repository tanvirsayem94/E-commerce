"use client"
const page = () => {
    const handleLoginForm = event =>{

    }
    
    return (
        <div className='bg-red-400 w-2/6 mx-auto px-4 py-10'>
             <h1 className="text-4xl text-center mb-5 text-white font-semibold">Lgin</h1>
            
            <form onSubmit={handleLoginForm} className="grid gap-5">
                <input type="text" name="name" id="" />
                <input type='email' name="Email"/>
                <input type='password' name="password"/>
                <button className="text-white text-2xl px-5 bg-emerald-500 rounded-xl">Login</button>
            </form>
        </div>
    );
};

export default page;