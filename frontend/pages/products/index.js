


const Product = () => {
  return (

        <div className="py-16 text-[#23314C] mb-32">  
            <div className="container m-auto px-6  md:px-12 xl:px-6">
                <h2 className="mb-12 text-center text-3xl text-[#6495ED] font-bold md:text-4xl">Our Security Products</h2>
                <div className=" pt-0 pb-4 mt-0 mb-4">
                <h3 className="mt-12 text-center text-xl text-[#6495ED]  md:text-2xl">Alarms</h3>
                <hr className="divide-y" />
                </div>
                
                <div className="grid gap-8 md:grid-rows-2 lg:grid-cols-2">
                    <div className="row-span-2 p-6 border border-gray-100 rounded-xl bg-[#FFFF] text-center sm:p-8">
                        <div className="h-full flex flex-col justify-center space-y-4">
                            <img className="w-120 h-100 mx-auto" src='assets/automaticalarms.png' alt="user avatar" height="220" width="220" loading="lazy"/>
                            <h2 className=" text-[#6495ED] text-center md:text-2xl font-bold">Automatic Alarms</h2>
                            <p className="text-[#23314C]">An automatic alarm system is far superior to the basic manual alarm system. It allows for 24-hour coverage, regardless of whether the client is present at home or the office. Once a sensor is triggered, the signal is received at our National Command & Control Centres and a mobile response team is dispatched immediately.</p>
                            <p className="text-[#23314C]">The automatic alarm system is triggered from a variety of sensors, such as magnetic door contacts, window vibration sensors and infrared motion sensors.</p>
                            <div>
                                <h6 className="text-[#23314C] text-lg font-semibold text-left leading-none">Other features of the automatic alarm system include:</h6>
                                <ul className="text-[#23314C] text-md  text-left list-disc list-inside">
                                    <li>Control panel</li>
                                    <li>Transmitter</li>
                                    <li>Exterior siren and strobe light</li>
                                    <li>Backup battery</li>
                                    <li>Wall keypad for arming and disarming</li>
                                    <li>Option of wired or wireless sensors</li>
                                </ul>
                                <span className="text-xs ">A survey must be conducted to determine the number and type of required sensors.</span>
                            </div>
                            <a href='/quote' className="bg-[#6495ED] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"> Get Quote</a>
                        </div>
                       
                    </div>
                    <div className="p-6 border border-gray-100 rounded-xl bg-[#FFFF] sm:flex sm:space-x-8 sm:p-8">
                    
                        <img className="w-100 h-80 mx-auto" src="assets/ManualAlarms.png" alt="user avatar" height="220" width="220" loading="lazy"/>
                        <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                            <h2 className="text-[#6495ED] text-center md:text-2xl font-bold">Manual Alarms</h2>
                            <p className="text-[#23314C]">A manual alarm system is a basic ‘push and alert’ system. Once the alarm is activated manually by pressing a fixed or wireless remote button, Limitless Security National Command & Control Centres will receive the alarm activation and dispatch a mobile response team to your home or business immediately.</p>
                            <div>
                                <h6 className="text-[#23314C] text-lg font-semibold text-left leading-none">The basic alarm system has the following features:</h6>
                                <ul className="text-[#23314C] text-md  text-left list-disc list-inside">
                                    <li>Three panic buttons, wired directly to Limitless Security transmitter</li>
                                    <li>Optional remote button available on request</li>
                                    <li>Additional panic buttons</li>
                                    <li>You will only be charged a monthly fee for the Mobile Response</li>
                                </ul>
                            </div>
                            <div className="mt-8 flex justify-center">
                                <a href='/quote' className="bg-[#6495ED] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"> Get Quote</a>
                            </div>
                            
                        </div>
                    </div>
                    <div className="p-6 border border-gray-100 rounded-xl bg-[#FFFF] sm:flex sm:space-x-8 sm:p-8">
                        <img className="w-100 h-40 mx-auto" src="assets/panic alarm.png" alt="user avatar" height="220" width="220" loading="lazy"/>
                        <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                            <h2 className="text-[#6495ED] text-center md:text-2xl font-bold">Panic Alarm Systems</h2>
                            <p className="text-[#23314C]">
                                We provide manually operated panic alarms with a siren for local alerts or a silent connection to Limitless Security radio transmitters with mobile response teams.
                            </p>
                            <p className="text-[#23314C]">
                                Fixed or wireless panic buttons are normally installed in selected locations of the area to be secured. A local audible siren and a transmission unit will notify the neighbours or people nearby of distress in the area. Subsequently, an electronic radio signal is sent to the National Command & Control Centre for prompt action.
                            </p>
                            <div className="mt-8 flex justify-center">
                                <a href='/quote' className="bg-[#6495ED] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"> Get Quote</a>
                            </div>
                        </div>
                        
                    </div>
                    <div className="row-span-2 p-6 border border-gray-100 rounded-xl bg-[#FFFF] text-center sm:p-8">
                        <div className="h-full flex flex-col justify-center space-y-4">
                            <img className="w-120 h-100 mx-auto" src="assets/Intruder Alarm Systems.png" alt="user avatar" height="220" width="220" loading="lazy"/>
                            <h2 className="text-[#6495ED] text-center md:text-2xl font-bold">Intruder Alarm Systems</h2>
                            <p className="text-[#23314C]">
                                Our intruder alarm systems are designed to detect intrusion or unauthorised entry into domestic and commercial properties. This acts as a preemptive measure that provides an early warning of a potential threat.
                            </p>
                            <p className="text-[#23314C]">
                                We also provide 24/7 monitoring and a National Command & Control Centre that will dispatch mobile response teams and call property owners in the event of alarm activation.
                            </p>
                            <p className="text-[#23314C]">
                                The most basic alarm consists of one or more sensors to detect intruders and an alerting device to signal the intrusion.
                            </p>
                            <div>
                                <h6 className="text-[#23314C] text-lg font-semibold text-left leading-none">Basic features include:</h6>
                                <ul className="text-[#23314C] text-md  text-left list-disc list-inside">
                                    <li>Main alarm panel to arm (switch ON/OFF or disarm) alarm system</li>
                                    <li>Motion sensors to detect unauthorised movement</li>
                                    <li>Door contacts to detect opening of secured doors</li>
                                    <li>Vibration sensors to secure windows (and in some cases walls) against forced physical entry</li>
                                    <li>Siren/flasher unit (sound) </li>  
                                </ul>
                                
                            </div>
                            <a href='/quote' className="bg-[#6495ED] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"> Get Quote</a>
                        </div>
                    </div>
                    <div className="p-6 border border-gray-100 rounded-xl bg-[#FFFF] sm:flex sm:space-x-8 sm:p-8">
                    
                        <img className="w-100 h-60 mx-auto" src="assets/Smoke Screen Systems.png" alt="user avatar" height="220" width="220" loading="lazy"/>
                        <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                            <h2 className="text-[#6495ED] text-center md:text-2xl font-bold">Smoke Screen Systems</h2>
                            <p className="text-[#23314C]">
                                A smoke screen security system protects against burglary and criminal damage by releasing thick smoke that conceals valuables by blurring the vision of the intruder.
                            </p>
                            <p className="text-[#23314C]">
                                The immediate release of smoke will confuse and shock any intruder or burglar, leaving them no choice but to retreat from the property even before they can attempt to steal anything. Smoke screen security systems are highly effective in stopping a burglary before it occurs.
                            </p>
                            <p className="text-[#23314C]">
                                These systems are beneficial for both residential and commercial properties.
                            </p>
                            <div className="mt-8 flex justify-center">
                                <a href='/quote' className="bg-[#6495ED] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"> Get Quote</a>
                            </div>
                        </div>
                        
                    </div>
                    <div className="p-6 border border-gray-100 rounded-xl bg-[#FFFF] sm:flex sm:space-x-8 sm:p-8">
                        <img className="w-100 h-40 mx-auto" src="assets/Fire Alarm Systems.jpeg" alt="user avatar" height="220" width="220" loading="lazy"/>
                        <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                            <h2 className="text-[#6495ED] text-center md:text-2xl font-bold">Fire Alarm Systems</h2>
                            <p className="text-[#23314C]">Our automatic smoke, heat, gas or combined sensors are installed in a location that allows for accurate detection and promptly activate an audible alarm. With strategically placed break glass switches that are connected to an alarm, anyone who sees a fire can break the glass, which will instantly activate an alarm.</p>
                            <p className="text-[#23314C]">Automatic systems are connected to sensors that are linked to a control panel that will activate an alarm and automatically initiate countermeasures—such as a sprinkler system—for quick and effective fire control.</p>
                            
                            <div className="mt-8 flex justify-center">
                                <a href='/quote' className="bg-[#6495ED] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"> Get Quote</a>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div >
                <h3 className="mt-12 text-center text-3xl text-[#6495ED]  md:text-2xl">Access Control & Biometrics</h3>
                <hr className="divide-y pt-0 pb-4 mt-0 mb-4" />
                </div>
             
                <div className="grid gap-8 md:grid-rows-2 lg:grid-cols-2">
                    <div className="row-span-2 p-6 border border-gray-100 rounded-xl bg-[#FFFF] text-center sm:p-8">
                        <div className="h-full flex flex-col justify-center space-y-4">
                            <img className="w-120 h-100 mx-auto" src="assets/cctv1.jpg" alt="user avatar" height="220" width="220" loading="lazy"/>
                            <h2 className="text-[#6495ED] text-center md:text-2xl font-bold">CCTV Monitoring Systems</h2>
                            <p className="text-[#23314C]">We offer a choice of traditional analogue CCTV systems or the latest IP-based digital solutions with everything from stand-alone cameras for a branch office or building complexes to integrated and IP addressable CCTV systems for high security environments.</p>
                            <p className="text-[#23314C]">
                                Our state-of-the-art monitoring systems allow us to effectively and remotely monitor and respond to any incidents that may occur, day or night.
                            </p>
                            <div>
                                <h6 className="text-[#23314C] text-lg font-semibold text-left leading-none">Some of the features include but are not limited to:</h6>
                                <ul className="text-[#23314C] text-md  text-left list-disc list-inside">
                                    <li>Three panic buttons, wired directly to a  Limitless Security transmitter</li>
                                    <li>Choice of dome, bullet or box cameras</li>
                                    <li>Day/night video technology</li>
                                    <li>Infrared illumination</li>
                                    <li>Wide range of digital video recorders</li>
                                    <li>Touchscreen monitor surveillance available</li>
                                    <li>Mobile connectivity for remote detection</li>
                                </ul>
                            </div>
                            <a href='/quote' className="bg-[#6495ED] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"> Get Quote</a>
                        </div>
                    </div>
                    <div className="p-6 border border-gray-100 rounded-xl bg-[#FFFF] sm:flex sm:space-x-8 sm:p-8">
                    
                        <img className="w-150 h-40 mx-auto" src="assets/VehicleBarriers.jpeg" alt="user avatar" height="220" width="220" loading="lazy"/>
                        <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                            <h2 className="text-[#6495ED] text-center md:text-2xl font-bold">Vehicle Barriers</h2>
                            <p className="text-[#23314C]">Boom (barrier) gates are typically used for car parks, apartment complexes and tollbooths to control the flow of traffic.</p>
                            <p className="text-[#23314C]">We offer both manual and automatic boom gates and barriers for vehicle and pedestrian access control, high security and anti-terror security measures.</p>
                            <div>
                                <h6 className="text-[#23314C] text-lg font-semibold text-left leading-none">Boom (barrier) gates are the ideal way to automate and control vehicle movement in:</h6>
                                <ul className="text-md  text-left list-disc list-inside">
                                    <li>Public parking entrances</li>
                                    <li>Car parks</li>
                                    <li>Private entrances</li>
                                    <li>Entrances to a block of flats/units</li>
                                
                                </ul>
                            </div>
                            <div className="mt-8 flex justify-center">
                                <a href='/quote' className="bg-[#6495ED] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"> Get Quote</a>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 border border-gray-100 rounded-xl bg-[#FFFF] sm:flex sm:space-x-8 sm:p-8">
                        <img className="w-100 h-40 mx-auto" src="assets/AutomaticGate.jpeg" alt="user avatar" height="220" width="220" loading="lazy"/>
                        <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                            <h2 className="text-[#6495ED] text-center md:text-2xl font-bold">Automatic Gate</h2>
                            <p className="text-[#23314C]">
                            Limitless Security offers strong and sturdy remote controlled sliding and electronic swing gates for access control to homes, apartment blocks and commercial facilities, among other applications.


                            </p>
                            <p className="text-[#23314C]">
                            We provide the African market with stronger, superior and secure swing gates for commercial and industrial use.
                            </p>
                            <div className="mt-8 flex justify-center">
                                <a href='/quote' className="bg-[#6495ED] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"> Get Quote</a>
                            </div>
                        </div>
                        
                    </div>
                    <div className="row-span-2 p-6 border border-gray-100 rounded-xl bg-[#FFFF] text-center sm:p-8">
                        <div className="h-full flex flex-col justify-center space-y-4">
                            <img className="w-160 h-160 mx-auto" src="assets/BiometricaccessSystems.jpeg" alt="user avatar" height="220" width="220" loading="lazy"/>
                            <h2 className="text-[#6495ED] text-center md:text-2xl font-bold">Biometric Access Systems</h2>
                            <p className="text-[#23314C]">We offers reliable, durable and highly accurate biometric access systems. They come already assembled and easy to program via keypads and embedded firmware.</p>
                            <p className="text-[#23314C]">Whether they are used to access a building, secure restricted locations within establishments or for time and attendance management, our biometric access systems enhance building security, internal communications and employee management with utmost reliability and accuracy.</p>
                            <div>
                                <h6 className="text-lg font-semibold text-left leading-none"> Some of the features include:</h6>
                                <ul className="text-md  text-left list-disc list-inside">
                                    <li>Reliable, durable and highly accurate infrared detection biometric sensor</li>
                                    <li>User recognition in less than one second</li>
                                    <li>Stores 1,500 fingerprint templates and 30,000 transactions</li>
                                    <li>Reads fingerprint and/or RFID cards</li>
                                    <li>Built-in serial, Ethernet and USB ports</li>
                                    <li>Tamper switch and alarm contacts And more </li>
                                </ul>
                                
                            </div>
                            <a href='/quote' className="bg-[#6495ED] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"> Get Quote</a>
                        </div>  
                    </div>
                    <div className="p-6 border border-gray-100 rounded-xl bg-[#FFFF] sm:flex sm:space-x-8 sm:p-8">
                    
                        <img className="w-100 h-60 mx-auto" src="assets/Metal Detectors.png" alt="user avatar" height="220" width="220" loading="lazy"/>
                        <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                            <h2 className="text-[#6495ED] text-center md:text-2xl font-bold">Metal Detectors</h2>
                            <p className="text-[#23314C]">
                            These walk-through detectors allow a high level of differentiation between significant metal masses, such as weapons and personal metal effects.
                            </p>
                            <div>
                                <h6 className="text-[#23314C] text-lg font-semibold text-left leading-none">The features include but are not limited to:</h6>
                                <ul className="text-[#23314C] text-md  text-left list-disc list-inside">
                                    <li>Accurate detection of magnetic, non-magnetic and mixed-alloy metal weapons</li>
                                    <li>High differentiation and throughput</li>
                                    <li>Exceptional immunity to environmental interference</li>
                                    <li>Unmatched reliability</li>
                                    <li>Rapid installation</li>  
                                </ul>
                                
                            </div>
                            <div className="mt-8 flex justify-center">
                                <a href='/quote' className="bg-[#6495ED] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"> Get Quote</a>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 border border-gray-100 rounded-xl bg-[#FFFF] sm:flex sm:space-x-8 sm:p-8">
                    
                        <img className="w-60 h-25 mx-auto" src="assets//motion.jpeg" alt="user avatar" height="220" width="220" loading="lazy"/>
                        <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                            <h2 className="text-[#6495ED] text-center md:text-2xl font-bold">Motion Sensor</h2>
                            <p className="text-[#23314C]">
                            These walk-through detectors allow a high level of differentiation between significant metal masses, such as weapons and personal metal effects.
                            </p>
                           
                            <div className="mt-8 flex justify-center">
                                <a href='/quote' className="bg-[#6495ED] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"> Get Quote</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-4 m-4">
                <hr className="divide-y" />
                </div>
                
                <p className="text-center">
                    If you would like to learn more about technical security solutions from Limitless Security Services, 
                   
                   
                        
                </p>
                <p className="text-center text-[#6495ED]">
                    <a href='/contact'>
                        contact us today.
                    </a>
                    
                </p>
            </div>
        </div>

    
  )
}

export default Product