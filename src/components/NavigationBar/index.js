import React from 'react'
import styles from './style.module.css'
import { Link } from 'gatsby'

const navTabs = [
  {tab: 'Home', to: '/'},
  {tab: 'About', to: '/about'}, 
  {tab: 'Blogs', to: '/blogs'},
  {tab: 'Albums', to: '/albums'}, 
  {tab: 'Contact', to: '/contact'}
]

const NavigationBar = ({ activeTab, useThisStyle }) => (
    <nav className={styles[useThisStyle || 'navigationBar']}>
        {navTabs.map(({tab, to}) => (
          <Link style={{ textDecoration: 'none' }} to={to} >
              <li className={tab === activeTab ? styles.active : ''}>{tab}</li>
          </Link>)
        )}
    </nav>
)

export default NavigationBar