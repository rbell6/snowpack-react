export interface ContactCardProps {
	name: string;
	email: string;
	phone: string;
}

export function ContactCard(props: ContactCardProps): JSX.Element {
	return (
		<div className="ContactCard">
			<h3>{props.name}</h3>
			<a href={`mailto:${props.email}`}>{props.email}</a>
			<p>{props.phone}</p>
		</div>
	);
}