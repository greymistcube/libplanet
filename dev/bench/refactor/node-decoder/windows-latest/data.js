window.BENCHMARK_DATA = {
  "lastUpdate": 1693448063248,
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
          "id": "571d2e2ecda5fef58ff55aa70421c94e053a5be9",
          "message": "Refactor NodeDecoder",
          "timestamp": "2023-08-31T10:55:48+09:00",
          "tree_id": "f99d98bba7f37125fa41427b2ed6228f30cb9410",
          "url": "https://github.com/greymistcube/libplanet/commit/571d2e2ecda5fef58ff55aa70421c94e053a5be9"
        },
        "date": 1693448037270,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1294556.25,
            "unit": "ns",
            "range": "± 65307.06407940022"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2531965.625,
            "unit": "ns",
            "range": "± 78255.67941617462"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1736706.1855670102,
            "unit": "ns",
            "range": "± 120481.05903560197"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4490797.05882353,
            "unit": "ns",
            "range": "± 143844.89644583012"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50024.489795918365,
            "unit": "ns",
            "range": "± 3954.1981142450277"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7897034.782608695,
            "unit": "ns",
            "range": "± 198373.57918078717"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20858492.307692308,
            "unit": "ns",
            "range": "± 184835.307149989"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52997150,
            "unit": "ns",
            "range": "± 222446.24818893516"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106331293.33333333,
            "unit": "ns",
            "range": "± 1417043.7650599356"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213706300,
            "unit": "ns",
            "range": "± 2435879.1941661285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4605085.729166667,
            "unit": "ns",
            "range": "± 15492.505600917393"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1425111.7885044643,
            "unit": "ns",
            "range": "± 3140.314467865051"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1062158.75,
            "unit": "ns",
            "range": "± 3231.226575165182"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2675287.6395089286,
            "unit": "ns",
            "range": "± 6969.1347573734865"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 833217.4455915178,
            "unit": "ns",
            "range": "± 3038.2967589788054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 770911.2862723215,
            "unit": "ns",
            "range": "± 1647.533201680051"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3387918.1818181816,
            "unit": "ns",
            "range": "± 105057.34283757089"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3573986.3636363638,
            "unit": "ns",
            "range": "± 86856.3252375222"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4275956.25,
            "unit": "ns",
            "range": "± 80707.3723914571"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3955155,
            "unit": "ns",
            "range": "± 86379.08174528075"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6156423.076923077,
            "unit": "ns",
            "range": "± 168117.03615682095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 259859.64912280702,
            "unit": "ns",
            "range": "± 11275.318488519242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 253418.42105263157,
            "unit": "ns",
            "range": "± 8659.157167123727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 228582.6530612245,
            "unit": "ns",
            "range": "± 13771.223736399765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4250940,
            "unit": "ns",
            "range": "± 55079.550262714176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3822157.1428571427,
            "unit": "ns",
            "range": "± 39891.327653739754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22761.224489795917,
            "unit": "ns",
            "range": "± 2908.3822212634086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88735.41666666667,
            "unit": "ns",
            "range": "± 6095.2091482904425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78985.85858585859,
            "unit": "ns",
            "range": "± 8078.821015482776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86818.6046511628,
            "unit": "ns",
            "range": "± 8943.713028489794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6681.632653061224,
            "unit": "ns",
            "range": "± 1192.7916608273551"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23752.577319587628,
            "unit": "ns",
            "range": "± 3166.231092307841"
          }
        ]
      }
    ]
  }
}