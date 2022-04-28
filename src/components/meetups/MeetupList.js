import classes from "./MeetupList.module.css";
import MeetupItem from "./MeetupItem";

function MeetupList(props) {
  // let meetups = [];

  // for (let meetup of props.meetups) {
  //   meetups.push(
  //     <MeetupItem
  //       key={meetup.id}
  //       id={meetup.id}
  //       image={meetup.image}
  //       title={meetup.title}
  //       address={meetup.address}
  //       description={meetup.description}
  //     />
  //   );
  // }

  // return <ul className={classes.list}>{meetups}</ul>;

  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
