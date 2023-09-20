window.BENCHMARK_DATA = {
  "lastUpdate": 1695170158721,
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
          "id": "83ea68379a7ee1222db323c0b069033faeb46d6c",
          "message": "Remove unused ExceptionMetadata from TxFailure",
          "timestamp": "2023-09-20T09:13:08+09:00",
          "tree_id": "520c196eeee8ba5ec7c963827cf256c6ad7f685b",
          "url": "https://github.com/greymistcube/libplanet/commit/83ea68379a7ee1222db323c0b069033faeb46d6c"
        },
        "date": 1695170151061,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 276662,
            "unit": "ns",
            "range": "± 9639.010887721677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 276444.4482758621,
            "unit": "ns",
            "range": "± 7891.443361488836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 248546.7,
            "unit": "ns",
            "range": "± 11007.997432221566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4534447.555555556,
            "unit": "ns",
            "range": "± 87362.06058037821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4194882.214285715,
            "unit": "ns",
            "range": "± 51588.740918595155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21481.852631578946,
            "unit": "ns",
            "range": "± 1967.8956249805196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91108.92222222222,
            "unit": "ns",
            "range": "± 5065.384136919608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78331.20212765958,
            "unit": "ns",
            "range": "± 4944.460477172207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80859.73493975903,
            "unit": "ns",
            "range": "± 7575.133977861039"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5298.968085106383,
            "unit": "ns",
            "range": "± 874.6741507202723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19751.795698924732,
            "unit": "ns",
            "range": "± 1866.7360410453919"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3595438.7647058824,
            "unit": "ns",
            "range": "± 115022.9021967414"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3875151.230769231,
            "unit": "ns",
            "range": "± 102523.38091354877"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4440566,
            "unit": "ns",
            "range": "± 117995.50653555979"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4142729.1428571427,
            "unit": "ns",
            "range": "± 97342.9560565559"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6304449.035714285,
            "unit": "ns",
            "range": "± 178103.64539378253"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1477629.7252747254,
            "unit": "ns",
            "range": "± 78996.39818949073"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2758897.923076923,
            "unit": "ns",
            "range": "± 28348.11258991075"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1856462.6547619049,
            "unit": "ns",
            "range": "± 97482.27923156382"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4933290.371428572,
            "unit": "ns",
            "range": "± 237933.12530900218"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49722.296703296706,
            "unit": "ns",
            "range": "± 2790.746317920891"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8011653.076923077,
            "unit": "ns",
            "range": "± 54797.43805364982"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22026321,
            "unit": "ns",
            "range": "± 254112.3027923453"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56574781.46666667,
            "unit": "ns",
            "range": "± 979816.6493187727"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112332100.55555555,
            "unit": "ns",
            "range": "± 3086654.698876157"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 225477636.06666666,
            "unit": "ns",
            "range": "± 3238697.5416508424"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5050957.24609375,
            "unit": "ns",
            "range": "± 9917.150804075245"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1593108.8194110577,
            "unit": "ns",
            "range": "± 4603.659621135214"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1092125.23046875,
            "unit": "ns",
            "range": "± 1304.3412039446564"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2611592.675480769,
            "unit": "ns",
            "range": "± 4876.13132535741"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825569.302358774,
            "unit": "ns",
            "range": "± 598.7398934348938"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 762232.2915414664,
            "unit": "ns",
            "range": "± 920.9416979668373"
          }
        ]
      }
    ]
  }
}