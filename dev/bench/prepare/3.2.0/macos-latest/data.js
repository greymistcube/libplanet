window.BENCHMARK_DATA = {
  "lastUpdate": 1690509673769,
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
          "id": "84896c2dbd5ae69d8598f91563d85f18494aa068",
          "message": "Prepare 3.2.0",
          "timestamp": "2023-07-28T10:34:17+09:00",
          "tree_id": "caa34c3224c3f99addd0c02b454de2a675696ee0",
          "url": "https://github.com/greymistcube/libplanet/commit/84896c2dbd5ae69d8598f91563d85f18494aa068"
        },
        "date": 1690509646943,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9186057.065656565,
            "unit": "ns",
            "range": "± 545407.2060856048"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22221806.454545453,
            "unit": "ns",
            "range": "± 831399.3458926455"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54465008.46969697,
            "unit": "ns",
            "range": "± 1694548.5682735774"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109552917.25,
            "unit": "ns",
            "range": "± 3123584.2273790822"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 229161560.3478261,
            "unit": "ns",
            "range": "± 5584224.193532825"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 78753.58139534884,
            "unit": "ns",
            "range": "± 10562.262788386963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 363576.297752809,
            "unit": "ns",
            "range": "± 36741.709319673166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 376033.24742268043,
            "unit": "ns",
            "range": "± 63669.816130275925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 370473.92553191487,
            "unit": "ns",
            "range": "± 56951.83824546321"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4857651.204081632,
            "unit": "ns",
            "range": "± 492315.97268944967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4330683.69072165,
            "unit": "ns",
            "range": "± 350446.0760901253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24334.005494505494,
            "unit": "ns",
            "range": "± 4845.218558018769"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108820.26041666667,
            "unit": "ns",
            "range": "± 18503.26367925672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 126476.10869565218,
            "unit": "ns",
            "range": "± 15762.47524556903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 127555.16666666667,
            "unit": "ns",
            "range": "± 19812.060257339457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8255.648351648351,
            "unit": "ns",
            "range": "± 1131.5148486640612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23317.032258064515,
            "unit": "ns",
            "range": "± 5179.448920349859"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1827325.426966292,
            "unit": "ns",
            "range": "± 252458.33624953602"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3571632.9032258065,
            "unit": "ns",
            "range": "± 483035.80174551887"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2289905.769230769,
            "unit": "ns",
            "range": "± 233781.9075316459"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6417933.414893617,
            "unit": "ns",
            "range": "± 486663.12865749036"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3585934.0561797754,
            "unit": "ns",
            "range": "± 305603.09291581565"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3683196.5454545454,
            "unit": "ns",
            "range": "± 304229.87889964273"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4913713.9387755105,
            "unit": "ns",
            "range": "± 349552.03255940846"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4340962.329896907,
            "unit": "ns",
            "range": "± 363508.77001848025"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8031241.943298969,
            "unit": "ns",
            "range": "± 534189.1339789755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7658679.672599871,
            "unit": "ns",
            "range": "± 666318.8245633987"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2229964.0421401514,
            "unit": "ns",
            "range": "± 104723.75322659445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1505003.7486530172,
            "unit": "ns",
            "range": "± 43216.2489667823"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3435565.1737288134,
            "unit": "ns",
            "range": "± 151876.08571056987"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1028951.3023097826,
            "unit": "ns",
            "range": "± 22722.581531445256"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 934529.6267778445,
            "unit": "ns",
            "range": "± 32063.75318816268"
          }
        ]
      }
    ]
  }
}