<script>
  import Card from "../../lib/components/card.svelte";
  import Col from "../../lib/components/col.svelte";
  import Row from "../../lib/components/row.svelte";
  import PanelContent from "../../lib/theme/PanelContent.svelte";
</script>

<PanelContent headerContent title="Dashboard">
  <Row>
    <Col size="6">
      <Card title="Ini Title">Hallo</Card>
    </Col>
    <Col size="6">
      <Card title="Ini Title">Hallo</Card>
    </Col>
  </Row>
</PanelContent>
