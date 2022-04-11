import Card from "../components/Card"
import Grid from "../components/Grid"
import Section from "../components/Section"
export default function Home() {
  return (
    <div className="landingPage">
      <Section>
        <Grid>
          <Card img="https://via.placeholder.com/300x250"/>
          <Card img="https://via.placeholder.com/300x250"/>
          <Card img="https://via.placeholder.com/300x250"/>
          <Card img="https://via.placeholder.com/300x250"/>
        </Grid>
      </Section>
    </div>
  )
}
