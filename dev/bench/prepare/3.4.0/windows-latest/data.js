window.BENCHMARK_DATA = {
  "lastUpdate": 1694089412360,
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
          "id": "2ee051d04d50883dc27141ddbc1225fb504963ce",
          "message": "Prepare 3.4.0",
          "timestamp": "2023-09-07T21:00:32+09:00",
          "tree_id": "d08370af5794578e62bc1c40dd2c906d7efde68b",
          "url": "https://github.com/greymistcube/libplanet/commit/2ee051d04d50883dc27141ddbc1225fb504963ce"
        },
        "date": 1694089382684,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1573298.9473684211,
            "unit": "ns",
            "range": "± 112317.47604185244"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3171028.5714285714,
            "unit": "ns",
            "range": "± 251867.40661598893"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2068808.163265306,
            "unit": "ns",
            "range": "± 207985.03895116944"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5615049.4845360825,
            "unit": "ns",
            "range": "± 444754.428993244"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60127.65957446808,
            "unit": "ns",
            "range": "± 11368.57018326828"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9275454.639175259,
            "unit": "ns",
            "range": "± 564924.726184202"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24979849.253731344,
            "unit": "ns",
            "range": "± 1178856.1108604693"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64489338.461538464,
            "unit": "ns",
            "range": "± 2200114.103813157"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 126597530.85106383,
            "unit": "ns",
            "range": "± 7162055.533065587"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 254623808.5106383,
            "unit": "ns",
            "range": "± 9855812.2401218"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5516451.796875,
            "unit": "ns",
            "range": "± 91426.08788239771"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1739231.0546875,
            "unit": "ns",
            "range": "± 31377.62356474867"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1275574.0364583333,
            "unit": "ns",
            "range": "± 16916.59250503452"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3464914.1666666665,
            "unit": "ns",
            "range": "± 48621.58594972884"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1037176.7717633928,
            "unit": "ns",
            "range": "± 15131.663685111776"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 997177.1741365131,
            "unit": "ns",
            "range": "± 21694.728467206784"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3689579.5918367347,
            "unit": "ns",
            "range": "± 285172.1718899834"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3895875,
            "unit": "ns",
            "range": "± 252638.4210476975"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5148572.631578947,
            "unit": "ns",
            "range": "± 366663.5345120557"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4364736.956521739,
            "unit": "ns",
            "range": "± 386031.4551088973"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7827703.260869565,
            "unit": "ns",
            "range": "± 478761.27512642293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 323981.52173913043,
            "unit": "ns",
            "range": "± 34321.0406401947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 314366.3157894737,
            "unit": "ns",
            "range": "± 40867.8243373614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 256726.3440860215,
            "unit": "ns",
            "range": "± 28684.636085517606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4703842.857142857,
            "unit": "ns",
            "range": "± 300567.13643569656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4152131.6326530613,
            "unit": "ns",
            "range": "± 294593.5773114941"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21411.494252873563,
            "unit": "ns",
            "range": "± 3351.0298759661555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101707.8947368421,
            "unit": "ns",
            "range": "± 15799.714372232205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 101800,
            "unit": "ns",
            "range": "± 17353.788011075085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109128.72340425532,
            "unit": "ns",
            "range": "± 18453.16432543744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7021.276595744681,
            "unit": "ns",
            "range": "± 958.5632551219595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23565.555555555555,
            "unit": "ns",
            "range": "± 5534.593173667103"
          }
        ]
      }
    ]
  }
}