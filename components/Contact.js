export default function Contact() {
  return (
    <div id="contact">
    <div className="divider p-8"></div>
    <div className="flex gap-6">
      <div className="ring-1  p-6 ring-slate-100/10 rounded-xl h-[400px]">
        <p className="text-2xl font-semibold">Get in touch</p>
        <div className="flex gap-4 mt-8 text-sm justify-center">
          <a href="#" class="flex items-center proj-btn btn-glow text-md font-semibold">
            Contact Me 
            {/* <svg aria-hidden="true" class="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> */}
          </a>
          <button class="relative inline-flex items-center justify-center p-[1px] gh-glow  font-semibold overflow-hidden text-md font-medium text-gray-900 rounded-md group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none">
            <span class="relative transition-all ease-in duration-75 bg-white dark:bg-black gh-btn rounded-md group-hover:bg-opacity-0 hover:text-black">
               Github
            </span>
          </button>
        </div>
      </div>
    <div className="ring-1  p-6  ring-slate-100/10 rounded-xl h-[400px]">
      <p className="text-2xl font-semibold">Get in touch</p>
      <div className="flex gap-4 mt-8  text-sm justify-center">
        <a href="#" class="flex items-center proj-btn btn-glow text-md font-semibold">
          Contact Me 
          {/* <svg aria-hidden="true" class="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> */}
        </a>
        <button class="relative inline-flex items-center justify-center p-[1px] gh-glow  font-semibold overflow-hidden text-md font-medium text-gray-900 rounded-md group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none">
          <span class="relative transition-all ease-in duration-75 bg-white dark:bg-black gh-btn rounded-md group-hover:bg-opacity-0 hover:text-black">
             Github
          </span>
        </button>
      </div>
    </div>
    </div>
    </div>
  )
}
