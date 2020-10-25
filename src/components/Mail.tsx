import React from 'react'
import './Mail.scss'

import userPicture from '../assets/user_avatar.png'

import Email from './Email'

interface Props {}

const Mail: React.FC<Props> = () => {
	return (
		<div className='mail'>
			<div className='mail__header'>
				<ul className='header__buttons'>
					<li className='header__button header__button--1'></li>
					<li className='header__button header__button--2'></li>
					<li className='header__button header__button--3'></li>
				</ul>
				<div className='header__logo' />
			</div>
			<div className='mail__body'>
				<div className='body__left'>
					<button type='button' className='left__button '>
						<div className='button__image' />
						Compose
					</button>

					<div className='body__mailbox'>
						<div className='mailbox__email'>
							<p className='mailbox__label mailbox__label--email'>MAILBOX</p>
							<ul className='mailbox__container mailbox__container--email'>
								<li className='container__item container__item--inbox'>
									<span className='item__image' />
									<p>Inbox (200)</p>
								</li>
								<li className='container__item container__item--sent'>
									<span className='item__image' />
									<p>Sent Mail</p>
								</li>
								<li className='container__item container__item--drafts'>
									<span className='item__image' />
									<p>Drafts</p>
								</li>
								<li className='container__item container__item--trash'>
									<span className='item__image' />
									<p>Trash (2)</p>
								</li>
								<li className='container__item container__item--attachments'>
									<span className='item__image' />
									<p>Attachments</p>
								</li>
								<li className='container__item container__item--more'>
									<span className='item__image' />
									<p>More...</p>
								</li>
							</ul>
						</div>
						<div className='mailbox__line' />
						<div className='mailbox__lists'>
							<p className='mailbox__label mailbox-__label--lists'>LISTS</p>
							<ul className='mailbox__container mailbox__container--lists'>
								<li className='container__item container__item--linkedIn'>
									LinkedIn
								</li>
							</ul>
						</div>
						<div className='mailbox__line' />
						<div className='mailbox__labels'>
							<p className='mailbox__label mailbox__label--lists'>LABELS</p>
							<ul className='mailbox__container mailbox__container--labels'>
								<li className='container__item container__item--personal'>
									<span className='item__image' />
									Personal (2)
								</li>
								<li className='container__item container__item--clients'>
									<span className='item__image' />
									Clients
								</li>
								<li className='container__item container__item--work'>
									<span className='item__image' />
									Work (2)
								</li>
								<li className='container__item container__item--friends'>
									<span className='item__image' />
									Friends
								</li>
							</ul>
						</div>
					</div>
					<div className='left__user'>
						<img src={userPicture} alt='user ' className='user__picture' />
						<div className='user__credentials'>
							<p className='user__name'>Salman Shah</p>
							<p className='user__email'>shah.salman4@gmaiil.com</p>
						</div>
					</div>
				</div>

				<div className='body__center'>
					<div className='center__search'>
						<input
							id='search__field'
							type='text'
							className='search__field'
							placeholder='Search'
						/>
					</div>

					<div className='center__block'>
						<p className='block__label'>Inbox</p>

						<div className='select__wrapper'>
							<label className='select__label' htmlFor='block__select'>
								Sort by:
							</label>
							<select id='block__select' className='block__select'>
								<option
									value='unread'
									className='select__option select__option--unread'>
									Unread
								</option>
								<option
									value='unread'
									className='select__option select__option--unread'>
									Read
								</option>
							</select>
						</div>
					</div>
					<div className='center__inbox'>
						{/*
                     // *   Email Components // 
    */}
						<div className='inbox__email'>
							<div className='email__head'>
								<p className='email__header'>Design Language</p>
								<p className='email__time'>08:00 PM</p>
							</div>
							<div className='email__body'>
								<p className='email__from'>Salman Shah</p>
							</div>
						</div>

						<div className='inbox__email'>
							<div className='email__head'>
								<p className='email__header'>Nextmail New Look</p>
								<p className='email__time'>11:00 AM</p>
							</div>
							<div className='email__body'>
								<p className='email__from'>Salman Shah</p>
							</div>
						</div>

						<div className='inbox__email'>
							<div className='email__head'>
								<p className='email__header'>Interview with Shopify </p>
								<p className='email__time'>12:05 PM</p>
							</div>
							<div className='email__body'>
								<p className='email__from'>Aisha Dialo</p>
							</div>
						</div>

						<div className='inbox__email'>
							<div className='email__head'>
								<p className='email__header'>Narcos Season 2</p>
								<p className='email__time'>07:35 PM</p>
							</div>
							<div className='email__body'>
								<p className='email__from'>Netflix</p>
							</div>
						</div>

						<div className='inbox__email'>
							<div className='email__head'>
								<p className='email__header'>Top Stories of the Day</p>
								<p className='email__time'>Yesterday</p>
							</div>
							<div className='email__body'>
								<p className='email__from'>TechCrunch</p>
							</div>
						</div>

						<div className='inbox__email'>
							<div className='email__head'>
								<p className='email__header'>Updates from Kevin</p>
								<p className='email__time'>Yesterday</p>
							</div>
							<div className='email__body'>
								<p className='email__from'>Goodreads</p>
							</div>
						</div>

						<div className='inbox__email'>
							<div className='email__head'>
								<p className='email__header'>Startup 2016</p>
								<p className='email__time'>09 Oct, 16</p>
							</div>
							<div className='email__body'>
								<p className='email__from'>ChangeMe</p>
							</div>
						</div>
						<Email />
						<Email />
					</div>
				</div>
				<div className='body__right'>
					<div className='right__actions'>
						<ul className='actions__container'>
							<li className='container__item container__item--unread'></li>
							<li className='container__item container__item--archieve'></li>
							<li className='container__item container__item--later'></li>
							<li className='container__item container__item--list'></li>
							<li className='container__item container__item--label'></li>
							<li className='container__item container__item--delete'></li>
						</ul>
					</div>

					<div className='right__output'>
						<p className='output__header'>Nextmail New Look</p>
						<div className='output__user'>
							<div className='user__container'>
								<img src={userPicture} alt='user ' className='user__picture' />
								<div className='user__credentials'>
									<p className='user__name'>Salman Shah</p>
									<span className='user__from'>From: </span>{' '}
									<span className='user__email'>shah.salman4@gmaiil.com</span>
								</div>
							</div>
							<p className='user__time'>11:00 AM, Today</p>
						</div>

						<div className='output__body'>
							<p className='body__content'>
								Hello Adithya,
								<br />
								<br />
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat.
								<br />
								<br />
								Duis aute irure dolor in reprehenderit in voluptate velit esse
								cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
								cupidatat non proident.
								<br />
								<br />
								<br />
								Cheers
								<br />
								DesignAvenger
							</p>

							<div className='body__download'>
								<div className='download__file'>
									<p className='file__ext'>PDF</p>
								</div>
								<a className='download__link' href='#' download>
									Sample.pdf
								</a>
							</div>
						</div>
						<div className='buttons__container'>
							<button
								type='button'
								className='output__button output__button--reply '>
								<div className='button__image' />
								Reply
							</button>
							<button
								type='button'
								className='output__button output__button--forward '>
								<div className='button__image' />
								Forward
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Mail
