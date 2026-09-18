import { motion } from "framer-motion";


export default function Hero(){

return(

<section
id="hero"
className="
min-h-[90vh]
flex
items-center
px-6
pt-28
"
>


<div className="
max-w-6xl
mx-auto
grid
md:grid-cols-2
gap-14
items-center
">


{/* IMAGE */}

<motion.div

initial={{opacity:0,scale:.8}}

animate={{opacity:1,scale:1}}

transition={{duration:.8}}

className="
flex
justify-center
"

>


<div className="relative">


{/* Glow */}

<div className="
absolute
inset-0
bg-gradient-to-r
from-blue-500
to-purple-500
rounded-[40px]
blur-3xl
opacity-40
">
</div>



{/* Image */}

<img

src="/profile.jpg"

alt="Zarrin Rahman Zinat"

className="
relative
w-[330px]
h-[430px]
object-cover
rounded-[40px]
border-8
border-white
shadow-2xl
"

/>



</div>


</motion.div>

{/* TEXT */}


<motion.div

initial={{opacity:0,x:50}}

animate={{opacity:1,x:0}}

transition={{duration:.8}}

>



<p className="
text-blue-600
font-bold
tracking-[5px]
">

HELLO, I'M

</p>




<h1 className="
mt-4
text-5xl
md:text-6xl
font-extrabold
leading-tight
">


<span className="
bg-gradient-to-r
from-blue-600
via-purple-600
to-pink-600
text-transparent
bg-clip-text
">

Zarrin Rahman Zinat

</span>


</h1>





<h2 className="
mt-5
text-2xl
font-bold
text-gray-700
">

Frontend Developer 🚀

</h2>





<p className="
mt-6
text-gray-600
text-lg
leading-relaxed
max-w-xl
">

I am a CSE student passionate about building modern,
responsive web applications using React.js, JavaScript,
Node.js and modern technologies.
</p>


<div className="
flex
gap-5
mt-8
flex-wrap
">



<a

href="/Zarrin_Rahman_Zinat_Resume.pdf"

download

className="
px-8
py-3
rounded-full
bg-blue-600
text-white
font-semibold
shadow-lg
hover:scale-105
transition
"

>

Download CV

</a>





<a

href="https://github.com/zinu-wq"

target="_blank"

rel="noopener noreferrer"

className="
px-8
py-3
rounded-full
border-2
border-blue-600
text-blue-600
font-semibold
hover:bg-blue-600
hover:text-white
transition
"

>

GitHub

</a>




</div>


</motion.div>



</div>


</section>


)

}