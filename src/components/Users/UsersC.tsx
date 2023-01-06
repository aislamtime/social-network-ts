import axios from 'axios'
import React from 'react'
import s from './Users.module.css'
import { UsersPropsType } from './UsersContainer'
import userPhoto from './../../assets/images/user.png'
import { UserType } from '../../redux/reducers/users-reduser'

export class UsersC extends React.Component<UsersPropsType, UserType[]> {
	//constructor(props: UsersPropsType) {
	//	super(props)

	//axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
	//	props.setUsers(response.data.items)
	//})

	//	if (this.props.items.length === 0) {
	//		this.props.setUsers([
	//			{
	//				name: 'Shubert',
	//				id: 1,
	//				photos: {
	//					small: '',
	//					large: '',
	//				},
	//				status: '',
	//				followed: false,
	//			},
	//			{
	//				name: 'Hacker',
	//				id: 2,
	//				photos: {
	//					small: '',
	//					large: '',
	//				},
	//				status: '',
	//				followed: false,
	//			},
	//		])
	//	}
	//}

	componentDidMount(): void {
		//console.log('did mount')
		//console.log(this.props)

		if (this.props.items.length === 0) {
			axios
				.get(
					`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.page}`,
				)
				.then((response) => {
					this.props.setUsers(response.data.items)
					this.props.setTotalUsersCount(response.data.totalCount)
				})
			//this.props.setUsers([
			//	{
			//		name: 'Shubert',
			//		id: 1,
			//		photos: {
			//			small: '',
			//			large: '',
			//		},
			//		status: '',
			//		followed: false,
			//	},
			//	{
			//		name: 'Hacker',
			//		id: 2,
			//		photos: {
			//			small: '',
			//			large: '',
			//		},
			//		status: '',
			//		followed: false,
			//	},
			//])
		}
	}
	onPageNumberChange = (currentPage: number) => {
		this.props.setCurrentPage(currentPage)
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.page}`)
			.then((response) => {
				this.props.setUsers(response.data.items)
			})
	}

	render() {
		let pagesCount = Math.ceil(this.props.totalCount / this.props.page)
		const pages = []
		for (let i = 1; i <= pagesCount; i++) {
			pages.push(i)
		}
		console.log(pages)

		return (
			<div className={s.main}>
				<div>
					{pages.map((p) => {
						return (
							<span
								className={`${this.props.currentPage === p ? s.selected : ''} ${s.changePage}`}
								onClick={() => {
									this.onPageNumberChange(p)
								}}
							>
								{p}
							</span>
						)
					})}
				</div>
				{this.props.items.map((u: UserType) => {
					return (
						<div key={u.id} className={s.user}>
							<div className={s.ava_and_btn}>
								<div className={s.user_photo}>
									<img src={u.photos.small ? u.photos.small : userPhoto} alt='photo' />
								</div>
								{u.followed ? (
									<button className={s.follow_btn} onClick={() => this.props.unfollow(u.id)}>
										Unfollow
									</button>
								) : (
									<button className={s.follow_btn} onClick={() => this.props.follow(u.id)}>
										Follow
									</button>
								)}
							</div>
							<div className={s.descr}>
								<div className={s.name}>{u.name}</div>
								<div className={s.status}>{u.status}</div>
								<div className={s.city}>{'should be city here'}</div>
								<div className={s.country}>{'should be country here'}</div>
							</div>
						</div>
					)
				})}
			</div>
		)
	}
}
