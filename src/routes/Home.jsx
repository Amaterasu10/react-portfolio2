import Card from "../components/Card"
import Grid from "../components/Grid"
export default function Home() {
  return (
    <div className="landingPage">
      <Grid>
        <Card img="https://via.placeholder.com/300x250"/>
        <Card img="https://via.placeholder.com/300x250"/>
        <Card img="https://via.placeholder.com/300x250"/>
        <Card img="https://via.placeholder.com/300x250"/>
      </Grid>
    </div>
  )
}
