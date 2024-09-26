

const SectionTittle = ({heading,subHeading}) => {
    return (
        <div className="w-full sm:w-8/12 m-8 md:w-6/12 lg:w-4/12 text-center mx-auto">
            <p className="text-yellow-600">------{subHeading}------ </p>
            <h3 className="text-4xl uppercase border-y-4 py-4">{heading} </h3>
        </div>
    );
};

export default SectionTittle;