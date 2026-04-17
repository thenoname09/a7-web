import FriendCard from "../ui/FriendCard";


const Friends = async() => {
    const res = await fetch("https://a7-web.vercel.app/friends.json",{cache: "no-store"});
    const friends = await res.json();
    console.log("friends")
    return (
        <div className="container mx-auto  pb-9">
            <h2 className="font-semibold text-3xl">Your Friend </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-fr mt-4 gap-5">

            {friends.map((friend) => (
              <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>
        </div>
    );
};

export default Friends;