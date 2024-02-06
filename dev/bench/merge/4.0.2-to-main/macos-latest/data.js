window.BENCHMARK_DATA = {
  "lastUpdate": 1707198868598,
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
          "id": "fa5c59e9034f5db4c36a914a9cd344df727f757d",
          "message": "Merge tag '4.0.2' into merge/4.0.2-to-main\n\nLibplanet 4.0.2",
          "timestamp": "2024-02-06T14:33:31+09:00",
          "tree_id": "1962cabcefac60b16dcc0d70eadaa10d61f02fac",
          "url": "https://github.com/greymistcube/libplanet/commit/fa5c59e9034f5db4c36a914a9cd344df727f757d"
        },
        "date": 1707198843238,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7866188.7,
            "unit": "ns",
            "range": "± 243688.62935248768"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23782066.085106384,
            "unit": "ns",
            "range": "± 1960999.2800548398"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59758122.870588236,
            "unit": "ns",
            "range": "± 4385351.402419184"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124565625.85869566,
            "unit": "ns",
            "range": "± 10088096.147575332"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 239620156.87179488,
            "unit": "ns",
            "range": "± 12274178.024928266"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41981.5625,
            "unit": "ns",
            "range": "± 9373.687687309115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 295631.9659090909,
            "unit": "ns",
            "range": "± 23233.34562522912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 275641.6382978723,
            "unit": "ns",
            "range": "± 29948.91897867803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 278504.724137931,
            "unit": "ns",
            "range": "± 17299.63945967208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4945004.7272727275,
            "unit": "ns",
            "range": "± 362052.527418384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4597354.333333333,
            "unit": "ns",
            "range": "± 46210.81334165164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24072.5,
            "unit": "ns",
            "range": "± 2933.9863703290434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80834.6,
            "unit": "ns",
            "range": "± 20253.709468947294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86967.41052631578,
            "unit": "ns",
            "range": "± 16798.97779026332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95593.31182795699,
            "unit": "ns",
            "range": "± 19976.06153732539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7596.923076923077,
            "unit": "ns",
            "range": "± 1591.838282062382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16314.457894736843,
            "unit": "ns",
            "range": "± 4983.463957879588"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1146239.8152173914,
            "unit": "ns",
            "range": "± 169413.32425522865"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2311842.355670103,
            "unit": "ns",
            "range": "± 144007.61216606092"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1811928.5959595959,
            "unit": "ns",
            "range": "± 149526.31539952272"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 19338343.893617023,
            "unit": "ns",
            "range": "± 2493911.7345954846"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3457978.4693877553,
            "unit": "ns",
            "range": "± 424031.7546645122"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3596232.9591836734,
            "unit": "ns",
            "range": "± 330618.7781195454"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4354694.010416667,
            "unit": "ns",
            "range": "± 302083.16261364694"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4388470.005263158,
            "unit": "ns",
            "range": "± 355503.63202965155"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 28149406.90526316,
            "unit": "ns",
            "range": "± 4250167.630742055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5739948.499681123,
            "unit": "ns",
            "range": "± 578982.3900553731"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1704350.4668168048,
            "unit": "ns",
            "range": "± 180124.95252708546"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1100771.2051897321,
            "unit": "ns",
            "range": "± 35347.78439587451"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2575758.0980808423,
            "unit": "ns",
            "range": "± 59606.412467847134"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 816155.9386307566,
            "unit": "ns",
            "range": "± 35425.33521316602"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 720579.1687739857,
            "unit": "ns",
            "range": "± 31184.380613647656"
          }
        ]
      }
    ]
  }
}