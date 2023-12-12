window.BENCHMARK_DATA = {
  "lastUpdate": 1702391939111,
  "repoUrl": "https://github.com/greymistcube/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "5e119e4c89abc2575593bef0141eab83e735888b",
          "message": "Updated PublicKeyType",
          "timestamp": "2023-12-12T23:19:39+09:00",
          "tree_id": "10154c1d6706819011527e83383a4d02d77757be",
          "url": "https://github.com/greymistcube/libplanet/commit/5e119e4c89abc2575593bef0141eab83e735888b"
        },
        "date": 1702391925315,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11740302.469696969,
            "unit": "ns",
            "range": "± 1824019.5285239862"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27069164.57731959,
            "unit": "ns",
            "range": "± 4377716.241379517"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69042381.67777778,
            "unit": "ns",
            "range": "± 9185025.549784966"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119506604.97,
            "unit": "ns",
            "range": "± 15409276.698254215"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 217730533.7820513,
            "unit": "ns",
            "range": "± 7619152.961532345"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73117.74742268042,
            "unit": "ns",
            "range": "± 21756.008910390196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 257698.74210526317,
            "unit": "ns",
            "range": "± 30213.360817837638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 255485.83695652173,
            "unit": "ns",
            "range": "± 27705.323492215164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 234163.22631578948,
            "unit": "ns",
            "range": "± 23832.262444025237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3738264.1764705884,
            "unit": "ns",
            "range": "± 74334.69697106064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3568891.375,
            "unit": "ns",
            "range": "± 164988.87227638034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12186.5,
            "unit": "ns",
            "range": "± 626.2408654995469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57405.01098901099,
            "unit": "ns",
            "range": "± 6345.1783960465345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53266.2,
            "unit": "ns",
            "range": "± 7059.924055357517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59134.054945054944,
            "unit": "ns",
            "range": "± 9971.662966585347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3205.9444444444443,
            "unit": "ns",
            "range": "± 356.7865745796073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12828.92857142857,
            "unit": "ns",
            "range": "± 1075.1996932564005"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1420420.8936170214,
            "unit": "ns",
            "range": "± 443008.24699414114"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3042277.6052631577,
            "unit": "ns",
            "range": "± 629393.846513478"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2119979.9375,
            "unit": "ns",
            "range": "± 572595.5211452278"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7877766.455555555,
            "unit": "ns",
            "range": "± 1010953.8764124992"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3112261.0833333335,
            "unit": "ns",
            "range": "± 122674.85132898533"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3314323.575,
            "unit": "ns",
            "range": "± 166132.10044067263"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3975464.272727273,
            "unit": "ns",
            "range": "± 168821.11837390732"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3820862.7527472526,
            "unit": "ns",
            "range": "± 224628.26142305986"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 15589008.036082475,
            "unit": "ns",
            "range": "± 2076754.5351902302"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4312737.045052083,
            "unit": "ns",
            "range": "± 48566.790207232356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1316656.2359375,
            "unit": "ns",
            "range": "± 18035.312241911488"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 852258.2416015625,
            "unit": "ns",
            "range": "± 14928.363946261348"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2054432.5791519007,
            "unit": "ns",
            "range": "± 124058.61077620886"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 626779.9792829241,
            "unit": "ns",
            "range": "± 7370.4721920313505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570972.8350911458,
            "unit": "ns",
            "range": "± 3851.8081616148447"
          }
        ]
      }
    ]
  }
}