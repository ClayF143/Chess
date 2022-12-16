using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace Chess.Pages
{
    [IgnoreAntiforgeryToken]
    public class IndexModel : PageModel
    {
        public string? Fen { get; set; }

        public void OnGet()
        {
            Fen = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";
            ViewData["fen"] = Fen;
        }

        public IActionResult OnPostSquareClick(string fen)
        {
            Fen = "something else";
            ViewData["fen"] = Fen;
            return new ViewResult();
            //return new EmptyResult();
        }
    }
}
