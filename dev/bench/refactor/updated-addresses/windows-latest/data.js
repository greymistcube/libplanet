window.BENCHMARK_DATA = {
  "lastUpdate": 1699002287467,
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
          "id": "0e72cb326937cc8187ec97be38ce02d3030a35e5",
          "message": "Remove public updatedAddresses parameter from Transaction.Create()",
          "timestamp": "2023-11-03T17:48:20+09:00",
          "tree_id": "f5e73c27bae6c711624a26ac0ac99945fe783f9c",
          "url": "https://github.com/greymistcube/libplanet/commit/0e72cb326937cc8187ec97be38ce02d3030a35e5"
        },
        "date": 1699002257000,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1374679.5918367347,
            "unit": "ns",
            "range": "± 114626.24783449553"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2540863.559322034,
            "unit": "ns",
            "range": "± 111280.240303211"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2010733.3333333333,
            "unit": "ns",
            "range": "± 127416.07837704591"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7955492.105263158,
            "unit": "ns",
            "range": "± 271824.3474781731"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61234.69387755102,
            "unit": "ns",
            "range": "± 6724.414695578082"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7695594.444444444,
            "unit": "ns",
            "range": "± 156245.25299978658"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19123096.666666668,
            "unit": "ns",
            "range": "± 344902.1431956496"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48015893.333333336,
            "unit": "ns",
            "range": "± 412353.0378322971"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96739933.33333333,
            "unit": "ns",
            "range": "± 762541.8580236073"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 194925821.42857143,
            "unit": "ns",
            "range": "± 1685483.850721791"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4483052.34375,
            "unit": "ns",
            "range": "± 5734.602812297788"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1459200.4817708333,
            "unit": "ns",
            "range": "± 5996.122689565362"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1099261.704799107,
            "unit": "ns",
            "range": "± 2621.4407663238444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2829414.7977941176,
            "unit": "ns",
            "range": "± 57968.447782218296"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 810706.5150669643,
            "unit": "ns",
            "range": "± 2843.7311980730706"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 742061.3932291666,
            "unit": "ns",
            "range": "± 2805.1828270288966"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3236952.380952381,
            "unit": "ns",
            "range": "± 76311.4579800938"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3365815.0684931506,
            "unit": "ns",
            "range": "± 166996.63059744058"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4112094.117647059,
            "unit": "ns",
            "range": "± 84206.43139472954"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3914051.6393442624,
            "unit": "ns",
            "range": "± 167512.6567275871"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9646825.581395349,
            "unit": "ns",
            "range": "± 233679.63834624126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 287175,
            "unit": "ns",
            "range": "± 7350.163767386915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 272609.375,
            "unit": "ns",
            "range": "± 7853.840620995565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 254264.2857142857,
            "unit": "ns",
            "range": "± 4297.334977877325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4140994.117647059,
            "unit": "ns",
            "range": "± 80361.71718072788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3739166.6666666665,
            "unit": "ns",
            "range": "± 64541.632927532766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25973.958333333332,
            "unit": "ns",
            "range": "± 2417.7521004640334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 114850,
            "unit": "ns",
            "range": "± 6191.27944583917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82996,
            "unit": "ns",
            "range": "± 11039.345793821098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67763.33333333333,
            "unit": "ns",
            "range": "± 7530.87204166059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3961.4583333333335,
            "unit": "ns",
            "range": "± 408.4295446982946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15390.425531914894,
            "unit": "ns",
            "range": "± 1293.2470719156997"
          }
        ]
      }
    ]
  }
}