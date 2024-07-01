export function loadFooter()
{
  let user = localStorage.getItem("name") || "Unknown";

  document.querySelector("footer").innerHTML = `
        <div class="footer">
            <div class="copyright">
                <p>${user}</p>
                <p>© 2022 XoloNotes. All rights reserved.</p>
            </div>
        </div>
  `;
}