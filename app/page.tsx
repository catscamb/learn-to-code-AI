import { AskQuestion } from '@/components/AskQuestion'
import { Comments } from '@/components/Comments'
import { CodeBlock } from '@/components/Code'
import { Explain } from '@/components/Explain'

const code1 = `<p>Going freelance means...</p>

<p>The first step is...</p>

<p>I'm not a fan...</p>`

const code2 = `p {
  margin: 24px 0 24px 0;
}`

const code3 = `p {
  margin: 24px 24px 24px 24px;
}`

const code4 = `p {
  margin: 24px;
}`

export default function Home() {
  return (
    <article>
      <AskQuestion>
        <h1>Margins</h1>

        <Explain>
          <p>
            Let&rsquo;s say we want to add a 24 pixel space at the top and bottom of all our
            paragraphs so our content is easier to read. We want to push other tags away from the
            tag that&rsquo;s above and below it:
          </p>
        </Explain>

        <CodeBlock language="xml" code={code1} />

        <Explain>
          <p>
            For our users, we want there to be a gap between the first <code>&lt;p&gt;</code> tag
            and the second <code>&lt;p&gt;</code> tag, then a gap between the second{' '}
            <code>&lt;p&gt;</code> tag and the third <code>&lt;p&gt;</code> tag. If we add a fourth,
            fifth, sixth or millionth <code>&lt;p&gt;</code> tag later, we want there to be a gap
            between them by default too.
          </p>

          <p>
            To get this spacing between each of the tags, we can use the margin rule within CSS.
            Margins take four values: top, right, bottom, left, clockwise starting from the top. For
            our paragraphs, we want 24 pixels at the top and 24 pixels at the bottom, but
            we&rsquo;re not too fussed about the left or right having a margin so we can make them
            have zero margin:
          </p>
        </Explain>

        <CodeBlock language="css" code={code2} />

        <Explain>
          <p>
            We have four values in our margin rule, all separated by spaces. If we decided that, in
            fact, the design would look better with the left and the right sides to have the same
            margin as the top and bottom, we&rsquo;d change our styles to be:
          </p>
        </Explain>

        <CodeBlock language="css" code={code3} />

        <p>
          If all four sides of the margins are equal, we can add a shortcut in here and just say one
          value and it&rsquo;ll apply them to all sides:
        </p>

        <CodeBlock language="css" code={code4} />

        <Explain>
          <p>
            One thing to remember with margins is that the gap between two tags is an overlap not an
            addition. For example, if we have two paragraphs, each with 24 pixels margin, the gap
            between them is 24px, not 48px. However, if we have a header with a 36 pixel margin next
            to a paragraph with just a 24 pixel margin, the gap between the two tags would be the
            maximum of the two, so in this case, 36px.
          </p>
        </Explain>

        {/* ask question panel gets added within the component at the bottom */}
      </AskQuestion>

      {/* insert the comments */}
      <Comments />
    </article>
  )
}
