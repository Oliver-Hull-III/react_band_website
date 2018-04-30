import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const gigs = [

	{
		id: 1,
		date: '12/03/1993',
		location: 'patchogue',
	},
	{
		id: 2,
		date: '12/27/1993',
		location: 'patchogue',
	},
	{
		id: 3,
		date: '12/03/2018',
		location: 'patchogue',
	},

];

const Gigs = ({data}) =>{
	console.log(data);

	return (
	<table className="table table-striped table-dark">
		<tbody>
			<tr>
				<th scope="col"> Date </th>
				<th scope="col"> Location </th>
				<th scope="col"> Details </th>
			</tr>
			{data.allContentfulConcert.edges.map(event =>
				(<Gig gig={event.node} key={event.id} />),
			)}
		</tbody>
	</table>

);}


export default Gigs;


const Gig = ({ gig }) => (
	<tr >
		<td width="15%"> {gig.time} </td>
		<td width="60%"> {gig.venue} </td>
		<td width="35%"> {gig.city} </td>
	</tr>
);

Gig.propTypes = {
	gig: PropTypes.shape({
		time: PropTypes.string.isRequired,
		city: PropTypes.string.isRequired,
		state: PropTypes.string.isRequired,
		venue: PropTypes.string.isRequired,
	}).isRequired, 
	
};


export const pageQuery = graphql`
  query ConcertQuery {
    allContentfulConcert (limit: 100) {
		edges{
			node{
				time
				city
				state
				venue
			}
		}
	
	}
}
`