using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Exemplo02.Context;
using Exemplo02.Models;

namespace Exemplo02.Controllers
{
    public class ContinenteController : Controller
    {
        private readonly AppDbContext _context;

        public ContinenteController(AppDbContext context)
        {
            _context = context;
        }

        // GET: Continente
        public async Task<IActionResult> Index()
        {
              return _context.Continentes != null ? 
                          View(await _context.Continentes.ToListAsync()) :
                          Problem("Entity set 'AppDbContext.Continentes'  is null.");
        }

        // GET: Continente/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null || _context.Continentes == null)
            {
                return NotFound();
            }

            var continente = await _context.Continentes
                .FirstOrDefaultAsync(m => m.continenteID == id);
            if (continente == null)
            {
                return NotFound();
            }

            return View(continente);
        }

        // GET: Continente/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Continente/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("continenteID,Nome")] Continente continente)
        {
                _context.Add(continente);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            return View(continente);
        }

        // GET: Continente/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null || _context.Continentes == null)
            {
                return NotFound();
            }

            var continente = await _context.Continentes.FindAsync(id);
            if (continente == null)
            {
                return NotFound();
            }
            return View(continente);
        }

        // POST: Continente/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("continenteID,Nome")] Continente continente)
        {
            if (id != continente.continenteID)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(continente);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!ContinenteExists(continente.continenteID))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(continente);
        }

        // GET: Continente/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null || _context.Continentes == null)
            {
                return NotFound();
            }

            var continente = await _context.Continentes
                .FirstOrDefaultAsync(m => m.continenteID == id);
            if (continente == null)
            {
                return NotFound();
            }

            return View(continente);
        }

        // POST: Continente/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            if (_context.Continentes == null)
            {
                return Problem("Entity set 'AppDbContext.Continentes'  is null.");
            }
            var continente = await _context.Continentes.FindAsync(id);
            if (continente != null)
            {
                _context.Continentes.Remove(continente);
            }
            
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool ContinenteExists(int id)
        {
          return (_context.Continentes?.Any(e => e.continenteID == id)).GetValueOrDefault();
        }
    }
}
