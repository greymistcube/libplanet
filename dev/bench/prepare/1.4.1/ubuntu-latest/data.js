window.BENCHMARK_DATA = {
  "lastUpdate": 1686129272846,
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
          "id": "8e352a36a1df2997198200100b40c956d9435aeb",
          "message": "Prepare 1.4.1",
          "timestamp": "2023-06-07T17:59:47+09:00",
          "tree_id": "00a0c7681d77723219c692049b0c449a1d5aa778",
          "url": "https://github.com/greymistcube/libplanet/commit/8e352a36a1df2997198200100b40c956d9435aeb"
        },
        "date": 1686129265689,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1443126.294117647,
            "unit": "ns",
            "range": "± 77725.64664066864"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2785595.575,
            "unit": "ns",
            "range": "± 98999.36461771953"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2310524.4470588234,
            "unit": "ns",
            "range": "± 116974.40511450784"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5869313.107692308,
            "unit": "ns",
            "range": "± 272729.8763539967"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3492773.470588235,
            "unit": "ns",
            "range": "± 109656.6320967507"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3726281.25,
            "unit": "ns",
            "range": "± 55781.60098769127"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4452327.434782608,
            "unit": "ns",
            "range": "± 110559.15714256823"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4525900.8292682925,
            "unit": "ns",
            "range": "± 162202.44160121362"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7104809.592592592,
            "unit": "ns",
            "range": "± 195989.5349404498"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8199505.5,
            "unit": "ns",
            "range": "± 208356.78041178602"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21984709.133333333,
            "unit": "ns",
            "range": "± 257412.106607525"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56037726.333333336,
            "unit": "ns",
            "range": "± 288835.600709288"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110479244.46666667,
            "unit": "ns",
            "range": "± 733740.3838415744"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219442828.86666667,
            "unit": "ns",
            "range": "± 1725281.1389412892"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6118382.751674107,
            "unit": "ns",
            "range": "± 35196.43424756446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1874391.6473858173,
            "unit": "ns",
            "range": "± 1366.2009966850358"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1385064.2359375,
            "unit": "ns",
            "range": "± 2670.382519115106"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2620348.003125,
            "unit": "ns",
            "range": "± 1811.8389183044544"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 830231.2182291667,
            "unit": "ns",
            "range": "± 896.9515975615324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 765893.9837472098,
            "unit": "ns",
            "range": "± 289.3290353122874"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50418.95652173913,
            "unit": "ns",
            "range": "± 3018.478613630716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 288387.5714285714,
            "unit": "ns",
            "range": "± 11251.560680634488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 273405.358490566,
            "unit": "ns",
            "range": "± 11408.957791500668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 252151.046875,
            "unit": "ns",
            "range": "± 11639.995013676027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4405162.285714285,
            "unit": "ns",
            "range": "± 50489.60793977399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4028514.2666666666,
            "unit": "ns",
            "range": "± 65210.607219407255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19952.25,
            "unit": "ns",
            "range": "± 2083.7575624211586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90416.89855072464,
            "unit": "ns",
            "range": "± 4369.633788481484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75331.30434782608,
            "unit": "ns",
            "range": "± 2910.0071085790623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96728.85567010309,
            "unit": "ns",
            "range": "± 15590.568177714113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5889.152173913043,
            "unit": "ns",
            "range": "± 576.3638947973677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20348.09574468085,
            "unit": "ns",
            "range": "± 1587.534031938321"
          }
        ]
      }
    ]
  }
}