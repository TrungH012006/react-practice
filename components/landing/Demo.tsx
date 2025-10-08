import Subheading from "../common/Subheading"
import Text from "../common/Text"
import { FaPlay } from "react-icons/fa"

const Demo = () => {
    return (
        <div id="demo" className="relative py-16 md:py-24 bg-white">
            <div className="default-container px-4 sm:px-6">
                <div className="text-center space-y-3 sm:space-y-4 max-w-2xl mx-auto mb-10 md:mb-16">
                    <Subheading className="text-blue-500">
                        See It In Action
                    </Subheading>
                    <Text className="text-base sm:text-lg md:text-xl text-gray-600">
                        Watch our demo video to see how our platform can transform your workflow
                    </Text>
                </div>

                {/* Video Container */}
                <div className="relative max-w-4xl mx-auto">
                    <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-50 border border-gray-100">
                        {/* Play Button */}
                        <div className="absolute inset-0 flex items-center justify-center z-20">
                            <button className="group">
                                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/90 flex items-center justify-center">
                                    <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-blue-500 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                                        <FaPlay className="w-4 h-4 sm:w-5 sm:h-5 text-white ml-1" />
                                    </div>
                                </div>
                            </button>
                        </div>
                        <iframe
                            className="absolute inset-0 w-full h-full"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                            title="Demo Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Demo