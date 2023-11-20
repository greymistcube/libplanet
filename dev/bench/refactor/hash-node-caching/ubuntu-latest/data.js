window.BENCHMARK_DATA = {
  "lastUpdate": 1700447567486,
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
          "id": "32615931208586c81ef11bf6ee44bb68e9bf85bc",
          "message": "Add missing cache",
          "timestamp": "2023-11-20T11:20:28+09:00",
          "tree_id": "f9b0ba0e6dd4038f2fad50eb41a3e0ae7e232043",
          "url": "https://github.com/greymistcube/libplanet/commit/32615931208586c81ef11bf6ee44bb68e9bf85bc"
        },
        "date": 1700447561466,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5847201.884615385,
            "unit": "ns",
            "range": "± 42039.06629659778"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15991088.2,
            "unit": "ns",
            "range": "± 95619.03243840707"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38155445.571428575,
            "unit": "ns",
            "range": "± 164452.95429379202"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 80528146,
            "unit": "ns",
            "range": "± 379958.64702480857"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 153235250.1,
            "unit": "ns",
            "range": "± 824983.5161414525"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 960508.5913978495,
            "unit": "ns",
            "range": "± 90253.49452998875"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1925342.3375,
            "unit": "ns",
            "range": "± 96505.16061395452"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1427547.4078947369,
            "unit": "ns",
            "range": "± 72150.2622781424"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5929004.94680851,
            "unit": "ns",
            "range": "± 416504.0730282617"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2487509.282051282,
            "unit": "ns",
            "range": "± 81194.64386274073"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2519443.963414634,
            "unit": "ns",
            "range": "± 89376.90525188751"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3148885.16,
            "unit": "ns",
            "range": "± 82170.98741530775"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2976205.9024390243,
            "unit": "ns",
            "range": "± 156917.1341476965"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6652738.65,
            "unit": "ns",
            "range": "± 218113.07050778938"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40439.826315789476,
            "unit": "ns",
            "range": "± 4586.463541544524"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3663177.380533854,
            "unit": "ns",
            "range": "± 9383.00775477904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1164560.6854166666,
            "unit": "ns",
            "range": "± 3778.343571465839"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 741475.9606119791,
            "unit": "ns",
            "range": "± 747.357383094357"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1972010.8665364583,
            "unit": "ns",
            "range": "± 3930.6439202094843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617787.0600210336,
            "unit": "ns",
            "range": "± 6443.888703137808"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576168.783984375,
            "unit": "ns",
            "range": "± 1939.4660010563719"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199570.02173913043,
            "unit": "ns",
            "range": "± 7688.4610936393365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194757.6170212766,
            "unit": "ns",
            "range": "± 7545.94276114566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170444.3947368421,
            "unit": "ns",
            "range": "± 5862.870888582466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3163857.153846154,
            "unit": "ns",
            "range": "± 34660.5406402491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2931342.6923076925,
            "unit": "ns",
            "range": "± 24098.229310416893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18380.948979591838,
            "unit": "ns",
            "range": "± 3796.14148480109"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 68061.18279569893,
            "unit": "ns",
            "range": "± 8363.340389885618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52344.16129032258,
            "unit": "ns",
            "range": "± 1622.8440850490338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64646.30612244898,
            "unit": "ns",
            "range": "± 14095.013006110932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5283.595959595959,
            "unit": "ns",
            "range": "± 1996.4326446122104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15100.726315789474,
            "unit": "ns",
            "range": "± 2668.5391311563867"
          }
        ]
      }
    ]
  }
}