# Data Types

This table lists all data types supported by TerrabaseDB and their corresponding
type symbols ( `tsymbol` s) and additional information.

<table class="table table-striped">
  <thead class="thead-dark">

    <tr>
      <th scope="col">Type symbol (tsymbol) </th>
      <th scope="col">Type</th>
      <th scope="col">Additional notes</th>
    </tr>

  </thead>
  <tbody>

    <tr>
      <th scope="row">+</th>
      <td>String</td>
      <td>The next line is a string</td>
    </tr>
    <tr>
      <th scope="row">!</th>
      <td>Response Code</td>
      <td>The next line is a <a href="#response-codes">response code</a></td>
    </tr>
    <tr>
      <th scope="row">$</th>
      <td>JSON</td>
      <td>The next line is a `JSON` value</td>
    </tr>
    <tr>
      <th scope="row">-</th>
      <td>smallint</td>
      <td>An integer in the range: [0, 255]</td>
    </tr>
    <tr>
      <th scope="row">_</th>
      <td>smallint signed</td>
      <td>An integer in the range: [-128, 127]</td>
    </tr>
    <tr>
      <th scope="row">:</th>
      <td>int</td>
      <td>An integer in the range: [0, 4,294,967,295]</td>
    </tr>
    <tr>
      <th scope="row">;</th>
      <td>int signed</td>
      <td>An integer in the range: [-2,147,483,647, 2,147,483,647]</td>
    </tr>
    <tr>
      <th scope="row">%</th>
      <td>float</td>
      <td>A 32-bit floating point value</td>
    </tr>
    <tr>
      <th scope="row">?</th>
      <td>binary</td>
      <td>The next line contains binary data (often called a blob)</td>
    </tr>

  </tbody>
</table>

Do keep the matching for this symbol _non-exhaustive_ since we might add more types in future revisions of the protocol.
