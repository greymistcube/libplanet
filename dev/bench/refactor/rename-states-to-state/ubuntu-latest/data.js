window.BENCHMARK_DATA = {
  "lastUpdate": 1688117445763,
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
          "id": "a6356333b6ce3987cecdc61838d8428a69efb910",
          "message": "General name changes",
          "timestamp": "2023-06-30T18:14:22+09:00",
          "tree_id": "9dd1f5bc211451c44be06e9a7b92b29245266c77",
          "url": "https://github.com/greymistcube/libplanet/commit/a6356333b6ce3987cecdc61838d8428a69efb910"
        },
        "date": 1688117437819,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7772998.73,
            "unit": "ns",
            "range": "± 496672.63057448115"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21545033.61038961,
            "unit": "ns",
            "range": "± 1092357.6465134239"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53738240.428571425,
            "unit": "ns",
            "range": "± 846464.2212157685"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105840684.11764705,
            "unit": "ns",
            "range": "± 4239984.868308002"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201491662.73076922,
            "unit": "ns",
            "range": "± 5357153.898180604"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48454.857142857145,
            "unit": "ns",
            "range": "± 3963.2070279045156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 303704.64,
            "unit": "ns",
            "range": "± 28838.541440484547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 283523.54,
            "unit": "ns",
            "range": "± 35410.006156001735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 253355.22,
            "unit": "ns",
            "range": "± 25288.241486237483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4533856.47,
            "unit": "ns",
            "range": "± 334178.82581280544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4023242.61,
            "unit": "ns",
            "range": "± 310111.0092711798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18894.916666666668,
            "unit": "ns",
            "range": "± 1568.531097399338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91195.70408163265,
            "unit": "ns",
            "range": "± 8074.280070947925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86007.69,
            "unit": "ns",
            "range": "± 9226.248707137664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99487.09574468085,
            "unit": "ns",
            "range": "± 13932.92967831396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5236.775510204082,
            "unit": "ns",
            "range": "± 751.9175833677331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18583.4375,
            "unit": "ns",
            "range": "± 2299.7434081699316"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1519290.5252525252,
            "unit": "ns",
            "range": "± 164356.901837617"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2871532.31,
            "unit": "ns",
            "range": "± 231959.6031641601"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1984801.68,
            "unit": "ns",
            "range": "± 206307.45678733528"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5382522.78,
            "unit": "ns",
            "range": "± 507946.71537903964"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6015877.342447917,
            "unit": "ns",
            "range": "± 198323.58373989986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1847454.3570149739,
            "unit": "ns",
            "range": "± 46784.15357666108"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1265060.3587239583,
            "unit": "ns",
            "range": "± 21376.87066780891"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2442067.367057292,
            "unit": "ns",
            "range": "± 32169.55298267383"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 806311.9587131076,
            "unit": "ns",
            "range": "± 22397.644177043767"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 746670.4407456341,
            "unit": "ns",
            "range": "± 14777.370239830643"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3445504.88,
            "unit": "ns",
            "range": "± 363099.35588381044"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3540105.72,
            "unit": "ns",
            "range": "± 288562.22996974626"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4303053.07,
            "unit": "ns",
            "range": "± 354568.79853924067"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3962738.74,
            "unit": "ns",
            "range": "± 323520.3487112907"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6768629.5,
            "unit": "ns",
            "range": "± 644856.8612761747"
          }
        ]
      }
    ]
  }
}