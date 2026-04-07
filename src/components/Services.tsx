export default function Services() {
  return (
    <section id="services" className="services-section">
      <p className="section-eyebrow">Areas of Expertise</p>
      <h2 className="section-title" style={{ color: 'white', maxWidth: '560px' }}>Specialist care for every <em>aspect</em> of
        mental health</h2>
      <div className="services-grid">
        <div className="service-card">
          <div className="service-num">01</div>
          <h3>Anxiety &amp; Panic Disorders</h3>
          <p>Overcome generalised anxiety, panic attacks, social phobia, and phobias through CBT and medication
            management tailored to your needs.</p>
          <span className="service-tag">CBT · Medication</span>
        </div>
        <div className="service-card">
          <div className="service-num">02</div>
          <h3>Depression &amp; Mood Disorders</h3>
          <p>Evidence-based treatment for clinical depression, dysthymia, and bipolar disorder — helping you
            rediscover joy and stability.</p>
          <span className="service-tag">Therapy · Medication</span>
        </div>
        <div className="service-card">
          <div className="service-num">03</div>
          <h3>Trauma &amp; PTSD</h3>
          <p>Trauma-informed therapy to process distressing experiences, reduce PTSD symptoms, and rebuild a sense
            of safety.</p>
          <span className="service-tag">EMDR · Trauma-focused</span>
        </div>
        <div className="service-card">
          <div className="service-num">04</div>
          <h3>OCD &amp; Intrusive Thoughts</h3>
          <p>Specialised ERP therapy and medication for obsessive-compulsive disorder, helping you break free from
            cycles of compulsion.</p>
          <span className="service-tag">ERP · OCD Specialist</span>
        </div>
        <div className="service-card">
          <div className="service-num">05</div>
          <h3>Relationship &amp; Family Issues</h3>
          <p>Support for marital conflicts, family dysfunction, and interpersonal difficulties affecting your
            mental wellbeing.</p>
          <span className="service-tag">IPT · Couples Support</span>
        </div>
        <div className="service-card">
          <div className="service-num">06</div>
          <h3>Addiction &amp; Recovery</h3>
          <p>Compassionate, non-judgmental care for substance use disorders and behavioural addictions —
            supporting lasting recovery.</p>
          <span className="service-tag">Addiction Medicine</span>
        </div>
      </div>
    </section>
  );
}
