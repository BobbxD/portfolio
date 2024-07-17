import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="sticky top-0 bg-blue-500">  Tanaphon Portfolio</div>
      <div className=" text-center grid-rows-2">
        <div className='bg-yellow-200'>TEST</div>
        <h1> About me</h1>
        <div className="flex flex-row flex-wrap justify-center">
          <div className=" w-4/12 justify-items-center">a
                    <Image src="/images/GetUserPhoto.jpg"
          width={100}
          height={100} alt="a" className="w-7/12 block m-auto"/>
          </div>
          <div className="w-6/12">
          <div className='text-start justify-start items-start'>I'm Tanaphon you can call me Bob!</div>
          <ul className=" text-start list-disc">
            <li>Name : Tanaphon Hanlerdrit</li>
            <li>Nickname : Bob</li>
            <li>Age : 23</li>
            <li>Email : tanaphon.hanl@bumail.net</li>
          </ul>
          <div className='text-start justify-start items-start'>Education</div>
          <ul className=" text-start list-disc">
            <li>สำเร็จการศึกษามัธยมต้นที่ โรงเรียนนวมินทราชินูทิศ เตรียมอุดมศึกษาน้อมเกล้า</li>
            <li>
              <p>สำเร็จการศึกษาประกาศนียบัตรวิชาชีพ ที่วิทยาลัยเทคโนโลยีทักษิณาบริหารธุรกิจ</p>
            </li>
            <li>ปัจจุบันศึกษาอยู่ที่ มหาวิทยาลัยกรุงเทพ
              <p>GPA 3.25</p>
            </li>
            <li>Email : tanaphon.hanl@bumail.net</li>
          </ul>
          
          </div>
        </div>
        <h1> My Skill</h1>
        <div className="bg-white grid grid-cols-2">
          <div className="m-3">Python 8
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 m-1">
          <div className="bar-6 bg-blue-600 h-2.5 rounded-full"></div></div>
          </div>
          <div className="m-3">Java 8
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 m-1">
          <div className="bar-5 bg-blue-600 h-2.5 rounded-full"></div></div>
          </div>
          <div className="m-3">HTML 7
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 m-1">
          <div className="bar-7 bg-blue-600 h-2.5 rounded-full"></div></div>
          </div>
          <div className="m-3">CSS 7
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 m-1">
          <div className="bar-6 bg-blue-600 h-2.5 rounded-full"></div></div>
          </div>
          <div className="m-3">JS 6
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 m-1">
          <div className="bar-6 bg-blue-600 h-2.5 rounded-full"></div></div>
          </div>
          <div className="m-3">Firebase 5
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 m-1">
          <div className="bar-4 bg-blue-600 h-2.5 rounded-full"></div></div>
          </div>
          <div className="m-3">MongoDB 5
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 m-1">
          <div className="bar-3 bg-blue-600 h-2.5 rounded-full"></div></div>
          </div>
          <div className="m-3">SQL 7
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 m-1">
          <div className="bar-6 bg-blue-600 h-2.5 rounded-full"></div></div>
          </div>
        </div>
        <h1>Certificates</h1>
        <div className="flex">
          <Image src="/images/seccer.png" alt="a" className="w-5/12 block m-auto"
          width={500}
          height={500}/>
          <Image src="/images/image.png" alt="a" className="w-5/12 block m-auto"
          width={500}
          height={500}/>
        </div>
      </div>
    </main>
  );
}
