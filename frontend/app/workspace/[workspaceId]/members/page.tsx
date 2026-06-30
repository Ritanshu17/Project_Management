const members =[
    {
        id: 1,
        name: "Ritanshu",
        role: "Role"
    },

    {
        id: 2,
        name: "john",
        role: "SDE 1",
    },
];

export default function MembersPage(){
    return(
        <div>
            <div className="flex justify-between mb-6">
                <h1 className="text-3xl font-bold">
                    Members
                </h1>

                <button className="bg-black text-white px-5 py-2 rounded-lg">
                    Invite Member
                </button>
            </div>

            <div className="space-y-4">
                {members.map((member) => (
                    <div 
                        key={member.id}
                        className="border rounded-xl p-4 flex justify-between"
                    >
                        <span>{member.name}</span>
                        <span>{member.role}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}