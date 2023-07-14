window.BENCHMARK_DATA = {
  "lastUpdate": 1689322840772,
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
          "id": "b888da88b58bc5066f7f54694e07839ab7292b99",
          "message": "Release 2.4.1",
          "timestamp": "2023-07-14T17:05:25+09:00",
          "tree_id": "9681d8a9488eec9cce736a5b57461ef0d7d77eca",
          "url": "https://github.com/greymistcube/libplanet/commit/b888da88b58bc5066f7f54694e07839ab7292b99"
        },
        "date": 1689322819901,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1337979,
            "unit": "ns",
            "range": "± 127155.23265249091"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2410940.625,
            "unit": "ns",
            "range": "± 74303.21427239657"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1691658.5106382978,
            "unit": "ns",
            "range": "± 104047.83061564744"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4831546,
            "unit": "ns",
            "range": "± 328813.18893280666"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47250.60240963855,
            "unit": "ns",
            "range": "± 2411.677560758754"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7045241.666666667,
            "unit": "ns",
            "range": "± 18714.23659984963"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19120746.666666668,
            "unit": "ns",
            "range": "± 289325.1578283177"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47213607.14285714,
            "unit": "ns",
            "range": "± 469571.8253641547"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95218118.75,
            "unit": "ns",
            "range": "± 1761763.2497846202"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 189526227.7777778,
            "unit": "ns",
            "range": "± 3890762.4744659523"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4739832.96875,
            "unit": "ns",
            "range": "± 23168.628075574456"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1501290.904017857,
            "unit": "ns",
            "range": "± 8396.996465115608"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1172783.7890625,
            "unit": "ns",
            "range": "± 4984.054871731509"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2663526.4322916665,
            "unit": "ns",
            "range": "± 11544.944460429468"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 848262.7604166666,
            "unit": "ns",
            "range": "± 4568.451522531217"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 783482.0940290178,
            "unit": "ns",
            "range": "± 1842.1979586599812"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3027902.3255813955,
            "unit": "ns",
            "range": "± 107375.61904776834"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3203453.3333333335,
            "unit": "ns",
            "range": "± 58547.78105672893"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3929043.243243243,
            "unit": "ns",
            "range": "± 123662.80663459301"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3517729.5918367347,
            "unit": "ns",
            "range": "± 135372.54457544163"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5853884.375,
            "unit": "ns",
            "range": "± 181391.34863848137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 243867.44186046513,
            "unit": "ns",
            "range": "± 7693.557011590083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 235617.91044776118,
            "unit": "ns",
            "range": "± 11067.23153048831"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 214270,
            "unit": "ns",
            "range": "± 7474.16747786531"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3920092.8571428573,
            "unit": "ns",
            "range": "± 54750.180390088695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3532688.888888889,
            "unit": "ns",
            "range": "± 70641.05529230475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17358.695652173912,
            "unit": "ns",
            "range": "± 1276.9427925187192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80342.70833333333,
            "unit": "ns",
            "range": "± 5748.404717679994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73953.84615384616,
            "unit": "ns",
            "range": "± 2571.5903490013575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 78857.33333333333,
            "unit": "ns",
            "range": "± 3635.0089532338284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4463.917525773196,
            "unit": "ns",
            "range": "± 665.3923602861305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17944.845360824744,
            "unit": "ns",
            "range": "± 1892.4395154370534"
          }
        ]
      }
    ]
  }
}