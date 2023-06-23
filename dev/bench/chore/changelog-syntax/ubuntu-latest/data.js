window.BENCHMARK_DATA = {
  "lastUpdate": 1687485171523,
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
          "id": "3aa3fe04eaa69b761d67132bbf7deeb088933887",
          "message": "[skip changelog] Removed json syntax highlighting in changelog",
          "timestamp": "2023-06-23T10:36:25+09:00",
          "tree_id": "dafc5cd1a5223a958bec45a046ad1b6e60f13267",
          "url": "https://github.com/greymistcube/libplanet/commit/3aa3fe04eaa69b761d67132bbf7deeb088933887"
        },
        "date": 1687485163300,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4256229.761904762,
            "unit": "ns",
            "range": "± 95661.85093646513"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4289882.057142857,
            "unit": "ns",
            "range": "± 137827.13382540483"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5051970.5,
            "unit": "ns",
            "range": "± 215544.60603655694"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5260741.8367346935,
            "unit": "ns",
            "range": "± 202982.72100490754"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8306337.127272727,
            "unit": "ns",
            "range": "± 349342.0379024744"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9665574.322033899,
            "unit": "ns",
            "range": "± 422158.20857190003"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25170019.451612905,
            "unit": "ns",
            "range": "± 752606.5432880955"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63160910.76923077,
            "unit": "ns",
            "range": "± 656090.4061619042"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 128004755.20689656,
            "unit": "ns",
            "range": "± 3741030.181749639"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 264418768.125,
            "unit": "ns",
            "range": "± 5088159.962194935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 327445.3086419753,
            "unit": "ns",
            "range": "± 17103.451451126737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 319572.2653061224,
            "unit": "ns",
            "range": "± 18109.17219302185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 284566.0303030303,
            "unit": "ns",
            "range": "± 18745.75131098666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5209417.604651162,
            "unit": "ns",
            "range": "± 191981.7049527847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4806009.173076923,
            "unit": "ns",
            "range": "± 197776.04108050923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21654.53125,
            "unit": "ns",
            "range": "± 1900.4657099781177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105316.11111111111,
            "unit": "ns",
            "range": "± 8774.825092609863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89595.57142857143,
            "unit": "ns",
            "range": "± 8982.149999780491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106776.40816326531,
            "unit": "ns",
            "range": "± 12536.75823027902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5695.063829787234,
            "unit": "ns",
            "range": "± 812.7647334936361"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20013.228260869564,
            "unit": "ns",
            "range": "± 1849.1556380407899"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53862.34482758621,
            "unit": "ns",
            "range": "± 3487.36069931878"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7056368.359375,
            "unit": "ns",
            "range": "± 103804.0032497626"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2242630.863541667,
            "unit": "ns",
            "range": "± 17634.983245647556"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1565532.7202845982,
            "unit": "ns",
            "range": "± 14397.44048613035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3019016.685286458,
            "unit": "ns",
            "range": "± 28215.205298193596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 974562.2838541666,
            "unit": "ns",
            "range": "± 11781.92698581319"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 888175.6092122396,
            "unit": "ns",
            "range": "± 9808.013825419715"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1738974.7922077922,
            "unit": "ns",
            "range": "± 87985.33818458763"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3289151.98,
            "unit": "ns",
            "range": "± 131025.87058777861"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2771623.978021978,
            "unit": "ns",
            "range": "± 149826.79683940075"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6764070.307692308,
            "unit": "ns",
            "range": "± 277006.9038682043"
          }
        ]
      }
    ]
  }
}