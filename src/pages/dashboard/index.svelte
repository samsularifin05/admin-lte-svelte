<script>
  // @ts-nocheck
  import { Link } from "svelte-routing";
  import { Card, Panel } from "../../components";
</script>

<Panel title="Dashboard">
  <div class="row">
    <div class="col-lg-3 col-6">
      <div class="small-box bg-info">
        <div class="inner">
          <h3>150</h3>
          <p>New Orders</p>
        </div>
        <div class="icon">
          <i class="ion ion-bag" />
        </div>
        <Link to="#" class="small-box-footer">
          More info <i class="fas fa-arrow-circle-right" />
        </Link>
      </div>
    </div>
    <div class="col-lg-3 col-6">
      <div class="small-box bg-success">
        <div class="inner">
          <h3>
            53 <sup style={{ fontSize: "20px" }}>%</sup>
          </h3>
          <p>Bounce Rate</p>
        </div>
        <div class="icon">
          <i class="ion ion-stats-bars" />
        </div>
        <Link to="#" class="small-box-footer">
          More info <i class="fas fa-arrow-circle-right" />
        </Link>
      </div>
    </div>

    <div class="col-lg-3 col-6">
      <div class="small-box bg-warning">
        <div class="inner">
          <h3>44</h3>
          <p>User Registrations</p>
        </div>
        <div class="icon">
          <i class="ion ion-person-add" />
        </div>
        <Link to="#" class="small-box-footer">
          More info <i class="fas fa-arrow-circle-right" />
        </Link>
      </div>
    </div>

    <div class="col-lg-3 col-6">
      <div class="small-box bg-danger">
        <div class="inner">
          <h3>65</h3>
          <p>Unique Visitors</p>
        </div>
        <div class="icon">
          <i class="ion ion-pie-graph" />
        </div>
        <Link to="#" class="small-box-footer">
          More info <i class="fas fa-arrow-circle-right" />
        </Link>
      </div>
    </div>
    <div class="col-lg-6 col-lg-6">
      <Card title="Card 1">ISI</Card>
    </div>
    <div class="col-lg-6 col-lg-6">
      <Card title="Card 2" />
    </div>
  </div>
</Panel>
