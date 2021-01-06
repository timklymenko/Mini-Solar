import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import GitHubIcon from '@material-ui/icons/GitHub'
import ChatIcon from '@material-ui/icons/Chat'
import BallotIcon from '@material-ui/icons/Ballot'

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}))

const mainFeaturedPost = {
  title: 'Battery Team',
  description: '',
}

const sidebar = {
  title: 'Resources',
  description:
    'Check out the archive: a collection of resources from throughout the 2020 Mini Solar program',
  archives: [
    {
      title: 'What you need to know about solar cells - Udo Roemor',
      // url: `url(${solarCellsPdf})`,
      url: '#',
    },
    { title: 'Other Example Resource - Jane Smith', url: '#' },
  ],
  social: [
    {
      name: 'GitHub',
      icon: GitHubIcon,
      url: 'https://github.com/raymo-nd/mini-solar-UNSW',
    },
    {
      name: 'The ChallENG Program: Mini Solar',
      icon: BallotIcon,
      url: 'https://www.challeng.unsw.edu.au/challeng-projects/mini-solar',
    },
    {
      name: 'Apply',
      icon: ChatIcon,
      url:
        'https://apply.challeng.unsw.edu.au/login/?next=/vertically-integrated-projects/',
    },
  ],
}

export default function Battery() {
  const classes = useStyles()

  return (
    <h5> Under construction.</h5>
    // <React.Fragment>
    //   <CssBaseline />
    //   <Container maxWidth="lg">
    //     <main>
    //       <MainFeaturedPost post={mainFeaturedPost} />
    //       <Grid container spacing={4}>
    //         {featuredPosts.map((post) => (
    //           <FeaturedPost key={post.title} post={post} />
    //         ))}
    //       </Grid>
    //       <Grid container spacing={5} className={classes.mainGrid}>
    //         <Main title="Read more about the project..." />
    //         <Sidebar
    //           title={sidebar.title}
    //           description={sidebar.description}
    //           archives={sidebar.archives}
    //           social={sidebar.social}
    //         />
    //       </Grid>
    //     </main>
    //   </Container>
    //   <Footer
    //     title="Mini Solar UI Portal"
    //     description="Stay tuned for additional functionality!"
    //   />
    // </React.Fragment>
  )
}
