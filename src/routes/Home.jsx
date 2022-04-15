import Card from "../components/Card"
import Grid from "../components/Grid"
import Section from "../components/Section"
export default function Home() {
  return (
    <div className="landingPage">
      <Section className="content-centerer" title="title">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae id natus, quia ullam odit nihil laudantium voluptatum ad, eius nesciunt corporis veniam voluptate blanditiis, iure laborum neque rem unde molestiae minima repellendus dolore optio autem? Corporis ab beatae placeat, a, quidem non reprehenderit dolore voluptate minus ad repellat quis rerum!</p>
      </Section>
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
