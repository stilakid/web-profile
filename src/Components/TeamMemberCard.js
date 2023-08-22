// Base Custom Button Class

export default function TeamMemberCard({ children, name, designation, contactDetails, ...props }) {
    return (
        <div className="p-5 rounded-2xl border shadow-md m-5 flex flex-col sm:flex-row">
            <div className="sm:w-1/3">
                <p> {name} </p>
                <p><em> {designation} </em></p>
                {contactDetails}
            </div>
            <div className="sm:w-2/3 border-t-2 pt-4 sm:border-t-0 sm:pt-0">
                {children}
            </div>
        </div>
    );
}