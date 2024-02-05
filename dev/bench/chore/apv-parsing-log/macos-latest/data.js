window.BENCHMARK_DATA = {
  "lastUpdate": 1707149853082,
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
          "id": "c013e427c088698e17084b792a8cfc1d0093d31a",
          "message": "Added which string caused a parsing error to log",
          "timestamp": "2024-02-05T18:29:44+09:00",
          "tree_id": "4dc1b8a7501d78e6554f41916915a523e718fd6f",
          "url": "https://github.com/greymistcube/libplanet/commit/c013e427c088698e17084b792a8cfc1d0093d31a"
        },
        "date": 1707149836281,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 12064170.732323233,
            "unit": "ns",
            "range": "± 1892540.662369336"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23962580.43814433,
            "unit": "ns",
            "range": "± 4517779.304442792"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71984992.42631578,
            "unit": "ns",
            "range": "± 13268568.560952695"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 150549121.44210526,
            "unit": "ns",
            "range": "± 44991132.07449164"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 237241959.4329897,
            "unit": "ns",
            "range": "± 26059352.62096981"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59989.04347826087,
            "unit": "ns",
            "range": "± 16186.734454663214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 351239.1875,
            "unit": "ns",
            "range": "± 85329.87920020963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 331327.5808080808,
            "unit": "ns",
            "range": "± 82007.32995097012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 274569.9888888889,
            "unit": "ns",
            "range": "± 41536.814393843924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4388036.4662921345,
            "unit": "ns",
            "range": "± 328913.44596856984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4072963.938202247,
            "unit": "ns",
            "range": "± 543746.7122541557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24943.94210526316,
            "unit": "ns",
            "range": "± 6948.528415635151"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97249.93298969071,
            "unit": "ns",
            "range": "± 23434.433091298946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88113.43956043955,
            "unit": "ns",
            "range": "± 18434.684714302846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100812.58602150538,
            "unit": "ns",
            "range": "± 23327.743120611038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6314.25,
            "unit": "ns",
            "range": "± 1415.0505440108006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19815.395833333332,
            "unit": "ns",
            "range": "± 4641.739135233842"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1643267.887755102,
            "unit": "ns",
            "range": "± 479950.0065426679"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3247084.8181818184,
            "unit": "ns",
            "range": "± 751821.517456639"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2552769.85483871,
            "unit": "ns",
            "range": "± 677270.704249298"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 28491904.03125,
            "unit": "ns",
            "range": "± 6634025.194736366"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4402402.680851064,
            "unit": "ns",
            "range": "± 995544.2802633515"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3892855.4574468085,
            "unit": "ns",
            "range": "± 1068926.9191842764"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4920351.055555556,
            "unit": "ns",
            "range": "± 1036333.6934043132"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4603955.469387755,
            "unit": "ns",
            "range": "± 892541.412107745"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 29254577.478947368,
            "unit": "ns",
            "range": "± 5439119.050068221"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5695834.510057472,
            "unit": "ns",
            "range": "± 820767.9797905899"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1818912.529296875,
            "unit": "ns",
            "range": "± 316706.5513537763"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1428423.07984375,
            "unit": "ns",
            "range": "± 434074.280574149"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2401099.056298325,
            "unit": "ns",
            "range": "± 325934.4877283221"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 673642.6464181674,
            "unit": "ns",
            "range": "± 29689.129704961957"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 602150.6784282484,
            "unit": "ns",
            "range": "± 20330.936491087698"
          }
        ]
      }
    ]
  }
}